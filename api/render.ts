import type { NextApiRequest, NextApiResponse } from 'next'
const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer')

// Fonction pour obtenir une URL absolue en fonction du chemin relatif et de l'environnement.
const getAbsoluteURL = (path: string, params: Record<string, string>) => {
  let baseUrl;

  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3000';
  } else {
    baseUrl = `https://${process.env.VERCEL_URL}`;
  }

  // Construction de la chaîne de requête avec les paramètres spécifiés
  const queryString = Object.entries(params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');

  // Ajout de la chaîne de requête à l'URL de base
  const absoluteURL = `${baseUrl}${path}?${queryString}`;

  return absoluteURL;
}

// Définition de l'API Next.js
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Extraction des paramètres de requête (HEAD, GLASS, CLOTHE, TONGUE, TEETH, SKIN, EYEBROWS, HAIR, NECKLACE, resolution)
  let {
    query: { HEAD, GLASS, CLOTHE, TONGUE, TEETH, SKIN, EYEBROWS, HAIR, NECKLACE, resolution }
  } = req

  // Vérification si les paramètres requis sont présents, sinon retourne une réponse avec statut 400 (Bad Request)
  if (!HEAD || !GLASS || !CLOTHE || !TONGUE || !TEETH || !SKIN || !EYEBROWS || !HAIR || !NECKLACE) {
    return res.status(400).end(`Missing required parameters`)
  }

  // Initialisation du navigateur Puppeteer
  let browser

  // Configuration différente du navigateur en fonction de l'environnement
  if (process.env.NODE_ENV === 'production') {
    browser = await puppeteer.launch({
      args: chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      ignoreHTTPSErrors: true
    })
  } else {
    browser = await puppeteer.launch({
      headless: true
    })
  }

  // Création d'une nouvelle page dans le navigateur
  const page = await browser.newPage()

  // Configuration de la résolution de la page si spécifiée, sinon par défaut à 512x512
  if (resolution) {
    await page.setViewport({ width: resolution, height: resolution })
  } else {
    await page.setViewport({ width: 512, height: 512 })
  }

  // Construction de l'URL avec les paramètres spécifiés
  const pageUrl = getAbsoluteURL(`?HEAD=${HEAD}&GLASS=${GLASS}&CLOTHE=${CLOTHE}&TONGUE=${TONGUE}&TEETH=${TEETH}&SKIN=${SKIN}&EYEBROWS=${EYEBROWS}&HAIR=${HAIR}&NECKLACE=${NECKLACE}`)

  // Chargement de l'URL de la page à capturer
  await page.goto(pageUrl)

  // Attente que la page signale qu'elle est prête
  await page.waitForFunction('window.status === "ready"')

  // Capture d'écran de la page et récupération des données au format PNG
  const data = await page.screenshot({
    type: 'png'
  })

  // Fermeture du navigateur Puppeteer
  await browser.close()

  // Configuration des en-têtes de réponse pour le cache et le type de contenu
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')

  // Envoi des données de la capture d'écran en tant que réponse
  res.end(data)
}
