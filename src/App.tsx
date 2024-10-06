// import { useState } from 'react'
import './App.css'
import { useAnimate, motion } from "framer-motion";
import "./styles.css";
import Pdf from './assets/Joe_Anthony-Brown_resume.pdf'
import hand from './assets/hand.png'
import laptop from './assets/laptop.png'
import paint from './assets/paint.png'

function App() {
 
  const [scope] = useAnimate();

  // const handleAnimate = async () => {
  //   animate('#target', {x:150});
  // }

  const introText = `
    My name is Joe. I’m a full stack developer and also make some art. 
  `

  const nextText = `
    Below you can find a couple projects and my resume. 
    Most of my professional work cannot be shown here but I'll add
    new personal projects as I create them. Cheers!
  `

  const goblinFighterText = `
    A simple UI that allows you to choose two monsters from DnD 5e
    and make them fight! Dice rolls are automated, monster stats are retrieved from the Dnd5e API,
    and the fight descriptions are generated via prompts to OpenAI API. Currently deployed using AWS Amplify.
  `

  const getSmartText = `
    A full stack aplication intended to help art history students study for exams.
    Users can create images of galleries that then get turned into flashcard games.
    The game keeps track of your score so you can always try to improve! Not currently deployed but
    you can pull it down from my github.
  `

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

  const textAppearVariant = {
    hidden: {opacity: 0}, 
    show: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1
      }
    }
  }

  const nextTextAppearVariant = {
    hidden: {opacity: 0}, 
    show: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 2
      }
    }
  }

  const selfieVariant = {
    hidden: {opacity: 0, y: -500}, 
    show: {
      opacity: 1,
      y: -120,
      transition: {
        duration: 3,
        delay: 2
      }
    }
  }

  const laptopVariant = {
    hidden: {opacity: 0, y: 300}, 
    show: {
      opacity: 1,
      y: -100,
      transition: {
        duration: 3,
        delay: 2
      }
    }
  }

  const paintVariant = {
    hidden: {opacity: 0, y:-170, x: 110}, 
    show: {
      opacity: 1,
      y: -170,
      x: 110,
      transition: {
        duration: 3,
        delay: 5
      }
    }
  }


  return (
    <div className='flex flex-col gap-10 overflow-x-hidden' ref={scope}>
      <motion.section 
        variants={gridContainerVariants} 
        initial="hidden"
        animate="show"
        className='app-container'>
        <motion.div 
            variants={gridSquareVariants}
            initial="hidden"
            animate="show"
            className='hello-square'
          >
            <motion.div 
                id='target'
                className='text-slate-800 text-4xl'
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 1, ease: "easeOut", delay: 1}}
              >
                Hello
            </motion.div>
        </motion.div>
        <motion.div 
            initial="hidden"
            animate="show"
            variants={gridSquareVariants}
            className='intro-square'
          >
          <motion.div
            variants={textAppearVariant}
          >
            {introText}
          </motion.div>
          <motion.div
            variants={nextTextAppearVariant}
          >
            {nextText}
          </motion.div>
        </motion.div>
        <motion.div 
            variants={gridSquareVariants}
            className='selfie-square'
          >
            <motion.div
              className='absolute size-50'
              variants={selfieVariant}
              >
              <img src={hand} />
            </motion.div>
            <motion.div
              className='absolute'
              variants={laptopVariant}
              >
              <img src={laptop} />
            </motion.div>
            <motion.div
              className='absolute'
              variants={paintVariant}
              >
              <img src={paint} />
            </motion.div>
        </motion.div>
       
        <motion.a 
          href='https://main.d3szxkwtdtrx3s.amplifyapp.com/'
          target='_blank'
          variants={gridSquareVariants}
          className='bg-slate-800 text-stone-100 text-2xl aspect-square rounded-lg justify-center flex items-center gap-10'
          >
          <motion.div 
            id='target'
            className='text-stone-100'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1}}
          >
            <div 
              className='text-4xl'>
                Goblin Fighter
            </div>
            <motion.div 
              className='text-sm p-3 mt-3 text-left'
              variants={nextTextAppearVariant}
            >
                {goblinFighterText}
            </motion.div>
          </motion.div>
        </motion.a>
        <motion.a 
          href='https://github.com/joewab/GetSmArt/tree/main'
          target='_blank'
          variants={gridSquareVariants}
          className='bg-slate-800 text-stone-100 text-2xl aspect-square rounded-lg justify-center flex items-center gap-10'
          >
          <motion.div 
            id='target'
            className='text-stone-100 text-4xl'
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1}}
          >
            <div 
              className='text-4xl'>
                GetSmArt
            </div>
            <motion.div 
              className='text-sm p-3 mt-3 text-left'
              variants={nextTextAppearVariant}
            >
                {getSmartText}
            </motion.div>        
          </motion.div>
        </motion.a>
        <motion.a 
          href = {Pdf} target = "_blank"
          variants={gridSquareVariants}
          className='bg-slate-800 text-stone-100 text-2xl aspect-square rounded-lg justify-center flex items-center gap-10'
          >
          <motion.div 
            id='target'
            className='text-stone-100 text-4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1}}
            >
              <div>Resume</div>
          </motion.div>
        </motion.a>
      </motion.section>
    </div>
  )
}

export default App
