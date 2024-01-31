import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
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
    // Add more components as needed
  }

  const Component = Components[componentName]
  return Component ? <Component /> : null
}

export default function ViewerPage() {
  const router = useRouter()
  const { HEAD, NECK, NOOSE, EAR, EYE } = router.query

  if (!HEAD || !NECK || !NOOSE || !EAR || !EYE) {
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
        <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt">
          {renderComponent(HEAD, componentProps)}
          {renderComponent(NECK, componentProps)}
          {renderComponent(NOOSE, componentProps)}
          {renderComponent(EYE, componentProps)}
          {renderComponent(EAR, componentProps)}
        </Stage>
      </Suspense>
    </Canvas>
  )
}
