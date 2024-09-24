import { useState } from 'react'
import './App.css'
import { useAnimate, motion, transform } from "framer-motion";
import "./styles.css";

function App() {
 
  const [expand, setExpand] = useState(false);

  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    animate('#target', {x:150});
  }

  const gridContainerVariants = {
    hidden: {opacity: 0}, 
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25
      }
    }
  }

  const gridSquareVariants = {
    hidden: {opacity: 0}, 
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      }
    }
  }

  return (
    <div className='flex flex-col gap-10 overflow-x-hidden' ref={scope}>
      <motion.section 
        variants={gridContainerVariants} 
        initial="hidden"
        animate="show"
        className='grid grid-cols-3 p-10 gap-10'>
        <motion.div 
          variants={gridSquareVariants}
          className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'
        >
          <motion.div 
            id='target'
            className='text-stone-100 text-4xl hover:cursor-pointer'
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1}}
            onClick={() => handleAnimate()}
          >
            Hello
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default App
