import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
import chrome from 'chrome-aws-lambda';

// Fonction pour obtenir une URL absolue en fonction du chemin relatif et des paramètres
const getAbsoluteURL = (path: string, params: Record<string, string>): string => {
  const baseUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`;

  const queryString = new URLSearchParams(params).toString();
  const absoluteURL = `${baseUrl}${path}?${queryString}`;

  return absoluteURL;
};

// Définition de l'API Next.js
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Extraction des paramètres de requête (HEAD, NECK, NOOSE, EYE, EAR, resolution)
  const {
    query: { HEAD, NECK, NOOSE, EYE, EAR, resolution },
  } = req;

  // Vérification si les paramètres requis sont présents, sinon retourne une réponse avec statut 400 (Bad Request)
  if (!HEAD || !NECK || !NOOSE || !EYE || !EAR) {
    res.status(400).end('Missing required parameters');
    return;
  }

  // Initialisation du navigateur Puppeteer
  let browser;

  // Configuration du navigateur en fonction de l'environnement
  const launchConfig = process.env.NODE_ENV === 'production' ? chrome : { headless: true };

  try {
    browser = await puppeteer.launch(launchConfig);
    const page = await browser.newPage();

    // Configuration de la résolution de la page si spécifiée, sinon par défaut à 512x512
    const viewportResolution = resolution ? parseInt(resolution as string, 10) : 512;
    await page.setViewport({ width: viewportResolution, height: viewportResolution });

    // Construction de l'URL avec les paramètres spécifiés
    const pageUrl = getAbsoluteURL('/', {
      HEAD: HEAD as string,
      NECK: NECK as string,
      NOOSE: NOOSE as string,
      EYE: EYE as string,
      EAR: EAR as string,
    });

    // Chargement de l'URL de la page à capturer
    await page.goto(pageUrl);

    // Attente que la page signale qu'elle est prête
    await page.waitForFunction('window.status === "ready"');

    // Capture d'écran de la page et récupération des données au format PNG
    const data = await page.screenshot({ type: 'png' });

    // Configuration des en-têtes de réponse pour le cache et le type de contenu
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    res.setHeader('Content-Type', 'image/png');

    // Envoi des données de la capture d'écran en tant que réponse
    res.end(data);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).end('Internal Server Error');
  } finally {
    // Fermeture du navigateur Puppeteer
    if (browser) {
      await browser.close();
    }
  }
};
