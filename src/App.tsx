// import { useState } from 'react'
import './App.css'
import { useAnimate, motion } from "framer-motion";
import "./styles.css";
import Pdf from './assets/Joe_Anthony-Brown_resume.pdf'
import selfie from './assets/selfie.png'

function App() {
 
  const [scope] = useAnimate();

  // const handleAnimate = async () => {
  //   animate('#target', {x:150});
  // }

  const introText = `
    My name is Joe. I’m a full stack developer and also make some art. 
    Most of my professional experience is with React, Angular, Typescript, and Java, 
    working on enterprise scale applications. 
    Recently I’ve also been playing around with AWS and Supabase as managed back ends, 
    Framer Motion for animations, RAG as a way to provide additional context for AI queries, 
    and I’m learning how to create browser extensions.
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
    hidden: {opacity: 0, y: -300}, 
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        delay: 2
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
            className='bg-slate-950 text-stone-100 text-2xl aspect-square rounded-lg justify-center flex items-center gap-10'
          >
            <motion.div 
              variants={selfieVariant}
              className='sm'
              >
              <img src={selfie} />
            </motion.div>
        </motion.div>
        <motion.div 
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
              <a href = {Pdf} target = "_blank">Resume</a>
          </motion.div>
        </motion.div>
        <motion.div 
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
          <a 
            href='https://main.d3szxkwtdtrx3s.amplifyapp.com/'
            target='_blank'
            className='text-4xl'>
              Goblin Fighter
          </a>
          <motion.div 
            className='text-sm p-2 mt-3'
            variants={nextTextAppearVariant}
          >
              {goblinFighterText}
          </motion.div>
        </motion.div>
        </motion.div>
        <motion.div 
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
          <a 
            href='https://github.com/joewab/GetSmArt/tree/main'
            target='_blank'
            className='text-4xl'>
              GetSmArt
          </a>
          <motion.div 
            className='text-sm p-2 mt-3'
            variants={nextTextAppearVariant}
          >
              {getSmartText}
          </motion.div>        
        </motion.div>
        </motion.div>
        <motion.div 
          variants={gridSquareVariants}
          className='bg-slate-800 text-stone-100 text-2xl aspect-square rounded-lg justify-center flex items-center gap-10'
        >
          <motion.div
            initial={{opacity:0}}
            animate={{ opacity: 1}}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
            className='text-4xl'
          >
            More to come...
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default App
