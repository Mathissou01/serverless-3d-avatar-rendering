import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { useRouter } from 'next/router'

const handleOnLoaded = () => {
  console.log('Model loaded')
  window.status = 'ready'
}

const renderComponent = (componentName, props) => {
  const Components = {
    Head1: () => <Head1 {...props} />,
    Head2: () => <Head2 {...props} />,
    Head3: () => <Head3 {...props} />,
    Hair1: () => <Hair1 {...props} />,
    Hair2: () => <Hair2 {...props} />,
    Hair3: () => <Hair3 {...props} />,
    // Add more components as needed
  }

  const Component = Components[componentName]
  return Component ? <Component /> : null
}

export default function ViewerPage() {
  const router = useRouter()
  const { HEAD, HAIR } = router.query

  if (!HEAD || !HAIR) {
    return <>Head or Hair not provided in the URL</>
  }

  // Pass additional props if needed
  const componentProps = {
    shadows: true,
    onLoaded: handleOnLoaded,
  }

  return (
    <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }} camera={{ fov: 30 }} shadows>
      <Suspense fallback={null}>
        <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt">
          {renderComponent(HEAD, componentProps)}
          {renderComponent(HAIR, componentProps)}
        </Stage>
      </Suspense>
    </Canvas>
  )
}
