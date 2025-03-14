import React from 'react';
import { motion } from 'framer-motion';

function RevealScrollAnimation() {
    return (
        <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', backgroundColor: 'black', color: 'white', paddingTop: '2.5rem', textAlign: 'center' }}>
                Scroll Reveal Animation
            </h2>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                style={{ width: '100%', height: '50vh', padding: '10rem', color: 'white', backgroundColor: '#d1d5db' }}
            >
                <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Section One</h1>
                <p style={{ fontSize: '1.125rem' }}>Hey! I'm the First Section</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, translateX: '-100%' }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}
                style={{ width: '100%', height: '50vh', padding: '10rem', backgroundColor: '#bfdbfe' }}
            >
                <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Section Two</h1>
                <p style={{ fontSize: '1.125rem' }}>Hey! I'm the Second Section</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, rotateX: '90deg' }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 2 }}
                style={{ width: '100%', height: '50vh', padding: '10rem', backgroundColor: '#34d399' }}
            >
                <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Section Three</h1>
                <p style={{ fontSize: '1.125rem' }}>Hey! I'm the Third Section</p>
            </motion.div>


            
        </div>
    );
}

export default RevealScrollAnimation;


// import React from 'react'
// import {motion} from 'framer-motion'

// function RevealScrollAnimation() {
// return (
//     <div>
//         <h2 className='text-3xl font-bold bg-black text-white pt-10 text-center'>
//             Scroll Reveal Animation 
//         </h2>
//         <motion.div 
//         initial={{opacity: 0 , scale:0}}
//         whileInView={{opacity: 1 , scale: 1 }}
//         transition={{duration : 2}}
//         className='w-full h-screen p-40 text-white bg-gray-300'>
//             <h1 className='text-4xl font-bold '>Section One </h1>
//             <p className='text-lg'>Hey! I'm the First Section</p>
//         </motion.div>
//         <motion.div 
//         initial={{opacity: 0 ,translateX: "-100%"}}
//         whileInView={{opacity: 1 , translateX:0}}
//         transition={{duration : 2}}
//         className='w-full bg-blue-200 h-screen p-40'>
//             <h1 className='text-3xl font-bold '>Section Two</h1>
//             <p className='text-lg'>Hey! I'm the Second Section</p>
//         </motion.div>
//         <motion.div 
//         initial={{opacity: 0 ,rotateX: "90deg"}}
//         whileInView={{opacity: 1 , rotateX:0}}
//         transition={{duration : 2}}
//         className='w-full bg-green-400 h-screen p-40'>
//             <h1 className='text-4xl font-bold '>Section Three </h1>
//             <p className='text-lg'>Hey! I'm the Third Section</p>
//         </motion.div>
//     </div>
// )
// }

// export default RevealScrollAnimation