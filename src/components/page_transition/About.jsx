import React from 'react'
import {motion} from 'framer-motion'
function About() {
return (
    <motion.div 
    initial = {{opacity : 0}}
    animate = {{opacity:1}}
    exit = {{opacity:0 }}
    transition={{duration : 2}}
    style = {{color : "blue" , fontSize: "30px" , padding: "20px"}}>
        About Page For Transition
    </motion.div>
)
}

export default About