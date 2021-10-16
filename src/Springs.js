import { useSpring, animated } from 'react-spring'
import React from 'react'

function LoopTrue() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "gray",
        borderRadius: 16,
        text:'eat at Monks',
        color: "white",
        
        ...styles,
      }}
    />
  )
}


export default LoopTrue;