import {motion} from 'framer-motion'
import React from 'react'

const Drag_Animation = () => {
  return (
    <div   style = {{backgroundColor: "gray"}}>
      <h1  style = {{textAlign: "center"}}>
        Draggable Object with framer motion 
      </h1>
      <div style ={{
        display : "flex" , 
        flexDirection : "row",
        gap : "200px",
        alignItems : "center",
        justifyContent : "center",
        // marginTop : "120px",
      }}>
        <div>
          <p style ={{fontWeight: "bold"}}>No Constraint</p>  

          {/* matlab hum box ko kahyn bhi move ker sekty hain  */}
          <motion.div
          style = {{
            width : "100px",
            height: "100px" ,
            background: "maroon",
            marginBottom: "100px"
          }}
          drag
          >
          </motion.div>
        </div>

        <div>
          <p style ={{fontWeight: "bold"}}>Drag Y Only </p>  
          <motion.div
          style = {{
            width : "100px",
            height: "100px" ,
            background: "brown",
            marginBottom: "100px"
          }}
          drag = "y"
          >
          </motion.div>
        </div>

        <div>
          <p style ={{fontWeight: "bold"}}>Drag Constraint</p>  
          <motion.div
          style = {{
            width : "100px",
            height: "100px" ,
            background: "brown",
            marginBottom: "100px"
          }}
          drag
          dragConstraints = {{left : 70, right:0 , top : -50}}
          >
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Drag_Animation