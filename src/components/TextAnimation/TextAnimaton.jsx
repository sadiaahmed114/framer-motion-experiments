import { motion } from "framer-motion";

export default function TextAnimation() {
    return(
        <motion.h1 
            initial={{x:-1000}}
            animate={{x:[0 , 800 , 0]}}
            transition={{
                duration : 1,
                delay: 0.5
            }}
            whileHover={{ scale: 0.9 , opacity : 0.5 }}
        >
            Create Awesome Text Animation Using Framer Motion
        </motion.h1>
    )
}