import React from 'react'
import { useState } from 'react';
import {motion , AnimatePresence} from 'framer-motion';

function Exit_Enter_Animation() {
    const[show , setShow] = useState(true)
return (
        <div style ={{
            display : "flex",
            gap: "10px",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor : "blueviolet"
        }}>

        <h1 style={{marginTop :"30px"}}>Exit_Enter_Animation</h1>
        <AnimatePresence>
            {show && <motion.div
                style = {{width : "100px" , height: "100px" , backgroundColor : "orange"}}
                initial= {{opacity: 0, x: 50}}
                animate = {{opacity : 1, x : 100}}
                exit = {{opacity : 0 , x : -150}}
                transition = {{
                    duration :1
                }}
            >

            </motion.div>
            }
        </AnimatePresence>
        <button onClick ={() => setShow(!show)} style={{padding : "12px 18px" , backgroundColor : "gray" , marginBottom: "100px"}} > {show?"Remove Box" : "Add Box" }

        </button>
    </div>
)
}

export default Exit_Enter_Animation

