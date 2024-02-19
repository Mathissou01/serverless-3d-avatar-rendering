## Getting Started

Read the article [Serverless 3D WebGL rendering with ThreeJS](https://rainer.im/blog/serverless-3d-rendering).

First, run the development server:

```bash
npm run dev
```
### Examples (DEVELLOPMENT)

#### View model
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Example : [http://localhost:3000/?model=/DamagedHelmet.glb](http://localhost:3000/?model=/DamagedHelmet.glb)

#### Render model

Example: [http://localhost:3000/api/render?model=/DamagedHelmet.glb](http://localhost:3000/api/render?model=/DamagedHelmet.glb)

### View a 3D model in browser (PRODUCTION)

First, you'll need a .glTF (or .GLB) formatted 3D model to render. [Here's one](http://serverless-3d-rendering.vercel.app/DamagedHelmet.glb) you can use.

`https://serverless-3d-rendering.vercel.app?model={URL}`

Example:

`https://serverless-3d-rendering.vercel.app?model=/DamagedHelmet.glb`

### Render a 2D image of a 3D model (PRODUCTION)

`https://serverless-3d-rendering.vercel.app/api/render?model={URL}`

Example:

`https://serverless-3d-rendering.vercel.app/api/render?model=https://serverless-3d-rendering.vercel.app/DamagedHelmet.glb`

On envoie à l'API plusieurs paramètre personnalisable comme  
{
HEAD,
GLASS,
CLOTHE,
TONGUE,
TEETH,
SKIN,
EYEBROWS,
HAIR,
NECKLACE
}

http://localhost:3000/leaderboard?HEAD=Head1&NECK=Neck1&NOOSE=Noose1&EARINGS=Earings1&EAR=Ear1&EYE=Eye1&NECKLACE=Necklace1&HAIR=Hair1&GLASS=Glass1&CLOTHE=Clothe1&TEETH=Teeth1&TONGUE=Tongue1&RANK=1
Leaderboard:

/leaderboard?HEAD=Head1&NECK=Neck1&NOOSE=Noose1&EAR=Ear1&EYE=Eye1&NECKLACE=Necklace1&HAIR=Hair1&GLASS=Glass1&CLOTHE=Clothe1&TEETH=Teeth1&TONGUE=Tongue1&RANK=1
