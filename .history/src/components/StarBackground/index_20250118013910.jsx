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
    
    useFrame(())
    return (
        <div>StarBackground</div>
    ) 
}

export default StarBackground