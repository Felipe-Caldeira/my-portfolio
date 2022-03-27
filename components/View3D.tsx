import React from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '@lib/gltfLoader';
import {View3DContainer, View3DSpinner} from './View3DLoader'

const View3D = ({ model, ...rest }) => {
    const mountRef = React.useRef(null);
    const [loading, setLoading] = React.useState(true)
    const [_renderer, setRenderer] = React.useState(null)
    // const [_camera, setCamera] = React.useState()

    const handleWindowResize = React.useCallback(() => {
        const { current: container } = mountRef
        if (container && _renderer) {
          const cw = container.clientWidth
          const ch = container.clientHeight
    
          _renderer.setSize(cw, ch)
        }
      }, [_renderer])

    React.useEffect(() => {
        // Mounting container reference
        const { current: container } = mountRef
        
        // Container dimensions
        const cw = container.clientWidth
        const ch = container.clientHeight

        // Main scene and camera setup
        const scene = new THREE.Scene();
        const scale = 14
        let camera = new THREE.OrthographicCamera(
            -scale,
            scale,
            scale,
            -scale,
            0.01,
            50000
        )
        camera.position.copy(new THREE.Vector3(
            30 * Math.sin(0.2 * Math.PI),
            10,
            30 * Math.cos(0.2 * Math.PI)
        ))
        // camera = new THREE.PerspectiveCamera(75, cw/ch, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(cw, ch);
        renderer.outputEncoding = THREE.sRGBEncoding
        setRenderer(renderer)
        container.appendChild(renderer.domElement);

        
        // Make camera rotate around target
        const target = new THREE.Vector3(2, 2, 0)
        camera.lookAt(target)

        
        // Add objects to scene
        loadGLTFModel(scene, model)
        .then(() => {
            animate()
            setLoading(false)
        })
        
        const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
        scene.add(ambientLight);
        
        // Camera controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true
        controls.enableDamping = true
        controls.target = target

        // const pointLight = new THREE.PointLight(0xffffff, 1);
        // pointLight.position.copy(target)
        // const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
        // scene.add( pointLightHelper );
        
        // Main animate function
        let animFrameId = null
        const animate = function () {
            animFrameId = requestAnimationFrame(animate);
            console.log(camera.position)
            controls.update()
            
            renderer.render(scene, camera);
        };

        return () => {
            container.removeChild(renderer.domElement);
            cancelAnimationFrame(animFrameId)
            renderer.dispose() 
        }
    }, [model]);

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
      }, [_renderer, handleWindowResize])


    return (
        <View3DContainer ref={mountRef} {...rest}>{loading && <View3DSpinner />}</View3DContainer>
    )
}

export default View3D