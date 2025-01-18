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
            <Points ref={ref} position={sphere} stride={3} args={[sphere]}>
                <PointMaterial size={0.01} color="white" />
            </Points>
        </group>
    ) 
}

export default StarBackground