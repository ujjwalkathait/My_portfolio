import React, {useState, useRef, Suspense} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = () =>{
    const ref = useRef()
    const [sphere] = useState(() => 
        random.inSphere(new Float32Array(5000), {radius: 1.2 })
    )
    
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })
    return (
        <group rotation={[0,0, Math.PI / 4]}> 
            <Points ref={ref} position={sphere} stride={3} frustumCulled {...[props]}>
                <PointMaterial transparent color ='$fff' size={0.002} sizeAttenuation={true} dethWrote />
            </Points>
        </group>
    ) 
}

export default StarBackground