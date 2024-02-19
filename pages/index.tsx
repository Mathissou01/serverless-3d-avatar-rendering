import { Canvas } from '@react-three/fiber'
import { Caustics, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { Head1 } from '../components/Head1'
import { Head2 } from '../components/Head2'
import { Head3 } from '../components/Head3'
import { Head4 } from '../components/Head4'
import { Head5 } from '../components/Head5'
import { Head6 } from '../components/Head6'
import { Head7 } from '../components/Head7'
import { Head8 } from '../components/Head8'
import { Head9 } from '../components/Head9'
import { Head10 } from '../components/Head10'
import { Head11 } from '../components/Head11'
import { Head12 } from '../components/Head12'
import { Neck1 } from '../components/Neck1'
import { Eye1 } from '../components/Eye1'
import { Ear1 } from '../components/Ear1'
import { Noose1 } from '../components/Noose1'
import { Clothe1 } from '../components/Clothe1'
import { Clothe2 } from '../components/Clothe2'
import { Clothe3 } from '../components/Clothe3'
import { Clothe4 } from '../components/Clothe4'
import { Clothe5 } from '../components/Clothe5'
import { Clothe6 } from '../components/Clothe6'
import { Earings1 } from '../components/Earings1'
import { Earings2 } from '../components/Earings2'
import { Necklace2 } from '../components/Necklace2'
import { Necklace1 } from '../components/Necklace1'
import { Glass1 } from '../components/Glass1'
import { Glass2 } from '../components/Glass2'
import { Teeth1 } from '../components/Teeth1'
import { Tongue1 } from '../components/Tongue1'

const handleOnLoaded = () => {
  console.log('Model loaded')
  window.status = 'ready'
}

const renderComponent = (componentName, props) => {
  const Components = {
    Head1: () => <Head1 {...props} />,
    Head2: () => <Head2 {...props} />,
    Head3: () => <Head3 {...props} />,
    Head4: () => <Head4 {...props} />,
    Head5: () => <Head5 {...props} />,
    Head6: () => <Head6 {...props} />,
    Head7: () => <Head7 {...props} />,
    Head8: () => <Head8 {...props} />,
    Head9: () => <Head9 {...props} />,
    Head10: () => <Head10 {...props} />,
    Head11: () => <Head11 {...props} />,
    Head12: () => <Head12 {...props} />,
    Neck1: () => <Neck1 {...props} />,
    Eye1: () => <Eye1 {...props} />,
    Noose1: () => <Noose1 {...props} />,
    Ear1: () => <Ear1 {...props} />,
    Clothe1: () => <Clothe1 {...props} />,
    Clothe2: () => <Clothe2 {...props} />,
    Clothe3: () => <Clothe3 {...props} />,
    Clothe4: () => <Clothe4 {...props} />,
    Clothe5: () => <Clothe5 {...props} />,
    Clothe6: () => <Clothe6 {...props} />,
    Earings1: () => <Earings1 {...props} />,
    Earings2: () => <Earings2 {...props} />,
    Necklace1: () => <Necklace1 {...props} />,
    Necklace2: () => <Necklace2 {...props} />,
    Glass1: () => <Glass1 {...props} />,
    Glass2: () => <Glass2 {...props} />,
    Tongue1: () => <Tongue1 {...props} />,
    Teeth1: () => <Teeth1 {...props} />,
    // Add more components as needed
  }

  const Component = Components[componentName]
  return Component ? <Component /> : null
}

export default function ViewerPage() {
  const router = useRouter()
  const { HEAD, NECK, NOOSE, EAR, EYE, NECKLACE, HAIR, GLASS, CLOTHE, TEETH, TONGUE } = router.query

  if (!HEAD || !NECK || !NOOSE || !EAR || !EYE || !NECKLACE || !HAIR || !GLASS || !CLOTHE || !TEETH || !TONGUE ) {
    return (
      <>
        <p>
          Oops! It seems that some essential components are missing from the URL. Please provide the following components:
        </p>
        <ul>
          {!HEAD && <li>Head</li>}
          {!NECK && <li>Neck</li>}
          {!NOOSE && <li>Noose</li>}
          {!EAR && <li>Ear</li>}
          {!EYE && <li>Eye</li>}
          {!NECKLACE && <li>Necklace</li>}
          {!HAIR && <li>Hair</li>}
          {!GLASS && <li>Glass</li>}
          {!CLOTHE && <li>Clothe</li>}
          {!TEETH && <li>Teeth</li>}
          {!TONGUE && <li>Tongue</li>}
        </ul>
      </>
    )
  }
  // Pass additional props if needed
  const componentProps = {
    shadows: true,
    onLoaded: handleOnLoaded,
  }

  return (
      <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }} camera={{ fov: 50 }} shadows>
      <Suspense fallback={null}>
        <Stage contactShadow shadows adjustCamera={1.1} intensity={0.6} environment="sunset" preset="portrait">
          <Caustics backside lightSource={[2.5, 5, -2.5]}>
          {renderComponent(HEAD, componentProps)}
          {renderComponent(NECK, componentProps)}
          {renderComponent(NOOSE, componentProps)}
          {renderComponent(EYE, componentProps)}
          {renderComponent(EAR, componentProps)}
          {renderComponent(NECKLACE, componentProps)}
          {renderComponent(TEETH, componentProps)}
          {renderComponent(TONGUE, componentProps)}
          {renderComponent(CLOTHE, componentProps)}
          {renderComponent(HAIR, componentProps)}
          {renderComponent(GLASS, componentProps)}
          </Caustics>
        </Stage>
      </Suspense>
    </Canvas>
  )
}
