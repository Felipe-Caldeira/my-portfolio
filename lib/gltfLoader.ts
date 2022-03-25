import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(scene, glbPath) {
    
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        
        loader.load( glbPath, gltf => {
            const obj = gltf.scene
            obj.name = 'MimiFlip'
            obj.receiveShadow = false
            scene.add(obj)
            resolve(obj)
            }, 
            undefined, 
            error => reject(error)
        );
    })
}
