import React from 'react'
import {Layer, Circle} from 'react-konva'

interface CursorProps {
  cursors: {x: number; y: number}[]
}

const CursorLayer: React.FC<CursorProps> = ({cursors}) => {
  return (
    <Layer>
      {cursors.map((cursor, index) => (
        <Circle key={index} x={cursor.x} y={cursor.y} radius={5} fill="red" />
      ))}
    </Layer>
  )
}

export default CursorLayer
