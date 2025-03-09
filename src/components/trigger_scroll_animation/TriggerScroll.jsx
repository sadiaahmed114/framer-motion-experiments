import React from 'react'
import {motion} from 'framer-motion'
function TriggerScroll() {
  return (
    <div 
    style = {{
        display : "flex" ,
        flexDirection: "column" , 
        alignItems: "center",
        marginTop: "100px"
    }}>
        <h2>TRIGGER SCROLL</h2>
        <Box/>
        <Box/>
        {/* <Box/>
        <Box/> */}
    </div>
  )
}

function Box() {
    return(
        <motion.div 
            style={{
                margin:"200px 0px",
                width : "100px",
                height : "100px",
                background: "yellow"
            }}
            initial ={{opacity : 0 ,scale : 0 , x : 500}}
            whileInView={{opacity: 1 , scale : 1 , x : 0}}
            transition={{duration : 0.6}}
        >

        </motion.div>
    )
}

export default TriggerScroll