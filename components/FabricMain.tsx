"use client"

import { useEffect } from "react"
import { fabric } from "fabric"
const FabricMain: React.FC =  () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas")
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 50,
      height: 50,
    });
    canvas.add(rect)
  }, [])
  return (
    <canvas id="canvas" width={500} height={500}></canvas>
  )
}
export default FabricMain