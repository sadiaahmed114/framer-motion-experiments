import React from 'react'
import {motion} from 'framer-motion'

function ScrollAnimation() {
return (
    <div>
        <h2 className='text-3xl font-bold bg-black text-white pt-10 text-center'>
            Scroll Reveal Animation 
        </h2>
        <motion.div className='w-full bg-gray h-screen p-40 text-white'>
            <h1 className='text-4xl font-bold '>Section One </h1>
            <p className='text-lg'>Hey! I'm the First Section</p>
        </motion.div>
        <motion.div className='w-full bg-vlue-200 h-screen p-40'>
            <h1 className='text-4xl font-bold '>Section Two</h1>
            <p className='text-lg'>Hey! I'm the Second Section</p>
        </motion.div>
        <motion.div className='w-full bg-green h-screen p-40'>
            <h1 className='text-4xl font-bold '>Section Three </h1>
            <p className='text-lg'>Hey! I'm the Third Section</p>
        </motion.div>
    </div>
)
}

export default ScrollAnimation