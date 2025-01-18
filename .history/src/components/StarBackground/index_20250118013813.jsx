import React, {useState, useRef, Suspense} from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'
// 
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props: any) =>{
    const ref:any = useRef()
    const [sphere] = useState(() => 
        random.inSphere(new Float32Array(5000), {radius: 1.2 })
    )
    return (
        <div>StarBackground</div>
    ) 
}

export default StarBackground