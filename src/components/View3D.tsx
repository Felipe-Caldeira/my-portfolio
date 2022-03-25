import React from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '@lib/gltfLoader';
import {View3DContainer} from './View3DLoader'

const View3D = ({ model, ...rest }) => {

    const mountRef = React.useRef(null);
    // const [_renderer, setRenderer] = React.useState()
    // const [_camera, setCamera] = React.useState()

    React.useEffect(() => {
        // Mounting container reference
        const { current: container } = mountRef

        // Container dimensions
        const cw = container.clientWidth
        const ch = container.clientHeight
        console.log(cw, ch)

        // Main scene and camera setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, cw/ch, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(cw, ch);
        renderer.outputEncoding = THREE.sRGBEncoding
        // renderer.shadowmap.enabled = true;
        // renderer.shadowmap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        camera.position.set(5, 5, 5);
        const controls = new OrbitControls(camera, renderer.domElement);

        // Add objects to scene
        const loadedModel = loadGLTFModel(scene, model);

        const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
        scene.add(ambientLight);

        // Helper visualizations
        const gridHelper = new THREE.GridHelper(200, 200);
        gridHelper.position.set(.5, -.5, .5);
        // scene.add(gridHelper);


        // Main animate function
        let animFrameId = null
        const animate = function () {
            animFrameId = requestAnimationFrame(animate);
            controls.update();

            renderer.render(scene, camera);
        };

        animate();
        return () => {
            container.removeChild(renderer.domElement);
            cancelAnimationFrame(animFrameId)
            renderer.dispose() 
        }
    }, []);


    return (
        <View3DContainer ref={mountRef} {...rest}></View3DContainer>
    )
}

export default View3D