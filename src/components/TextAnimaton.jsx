import { motion } from "framer-motion";

export default function TextAnimation() {
    return(
        <motion className="h1" 
            initial={{x:-100}}
            animate={{}}
        >
            Create Awesome Text Animation Using Framer Motion
        </motion>
    )
}