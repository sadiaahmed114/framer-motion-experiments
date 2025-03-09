import React, { useRef } from 'react';
import {motion, useScroll} from 'framer-motion'

function ScrollAnimations() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef, 
    offset: ["start end", "end start"],
    });
  return (
    <>
    <div ref={scrollRef} style={{ height: "50vh", padding: "20px" }}>
    <motion.div 
    style={{
      scaleX : scrollYProgress,
      position : "fixed" ,
      top: 0 ,
      right: 0 ,
      height:10 ,
      background: "red" ,
      transformOrigin: "0%",
      width: "100%",
    }}>
      
    </motion.div>
    <h2>Scroll Demo</h2>
    <p>Scroll down to see the animation effect.</p>
        <p>Scroll Animation only applies inside this section.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>
        <p>Scroll down to see the animation effect.</p>

        <p>Scroll down to see the animation effect.</p>
    {/* {[...Array(30)].map((_, i) => (
        <p key={i}>Scroll Animation Scroll-linked</p>
    ))} */}
    </div>
    </>
  )
}

export default ScrollAnimations