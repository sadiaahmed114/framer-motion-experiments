import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
function HoverAndTapAnimations() {
    const[showCard , setShowCard] = useState(false)
return (
    <div 
        style={{
            display: "flex",
            justifyContent : "center" ,
            alignItems : "center",
            height : "100vh",
            background : "grey",
        }}
    >
        <motion.div style = {{
            background: "#fff",
            padding : "3rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0,2)",
        }}
        whileHover = {{
            scale: 1.1
        }}
        transition={{
            layout:{
                duration : 1 ,
                type: "spring"
            }
        }}
        layout
        onClick={() => setShowCard(!showCard)}
        >
            <motion.h3>
                Hover or click
            </motion.h3>
            {showCard && (
                <motion.p 
                style={{width: "600px"}}
                initial={{opacity:0}}
                animate={{opacity: 1}}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae a doloribus optio laborum praesentium eius alias ab ipsa, harum eveniet exercitationem officiis tenetur, nemo, voluptate sed. Mollitia assumenda commodi quidem saepe expedita, incidunt a vitae dolorem modi perferendis consectetur labore, veniam corporis aut! Culpa reiciendis reprehenderit accusamus eum consequatur?
                </motion.p>
            )}


        </motion.div>

    </div>
)
}

export default HoverAndTapAnimations