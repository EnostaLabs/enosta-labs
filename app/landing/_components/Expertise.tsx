import Image from '@/components/containers/Image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/getScrollAnimation'
import ScrollAnimationWrapper from '@/components/motions/ScrollAnimationWrapper'
import ComputerVision from '../../../public/static/icons/computer_vision.svg'
import NLP from '../../../public/static/icons/nlp.svg'
import Speech from '../../../public/static/icons/speech.svg'
import MachineLearning from '../../../public/static/icons/machine_learning.svg'
import { TwoColumnsContainer } from '@/components/styles/landing/_components/Expertise.styled'

const Expertise = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-12"
      id="feature"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="ml-auto flex w-full flex-col justify-center"
          variants={scrollAnimation}
        >
          <h3 className="text-black-600 text-3xl font-medium leading-relaxed lg:text-4xl">
            Our Areas of Expertise
          </h3>
          <p className="text-black-500 my-2">
            We work on almost all areas of AI including modeling and representation, reasoning and
            planning, machine learning and data science, computer vision and natural language
            processing as well as learning theory.
          </p>
        </motion.div>
      </ScrollAnimationWrapper>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center"
            variants={scrollAnimation}
          >
            <ComputerVision />
            <h4 className="text-black-600 text-xl font-medium leading-relaxed lg:text-2xl">
              Computer Vision
            </h4>
            <p className="text-black-500 my-2">
              Computer vision enables computers to understand the real visual world. Research
              directions:large-scale image classification, semantic segmentation, and captioning;
              analysis, detection, tracking, recognition, 3D modeling and generation of human faces
              and bodies; video content analysis, classification, summarization, captioning, search,
              and recommendation, etc.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center"
            variants={scrollAnimation}
          >
            <NLP />
            <h4 className="text-black-600 text-xl font-medium leading-relaxed lg:text-2xl">
              Natural Language Processing
            </h4>
            <p className="text-black-500 my-2">
              Give computer systems the ability to interact with the outside world in a natural
              language text format, track and study the cutting-edge natural language text
              understanding and generation technology, incubate the next generation of natural
              language processing technology and business application scenarios. Research
              directions: text understanding, text generation, dialogue, and machine translation,
              etc.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center"
            variants={scrollAnimation}
          >
            <Speech />
            <h4 className="text-black-600 text-xl font-medium leading-relaxed lg:text-2xl">
              Speech Processing
            </h4>
            <p className="text-black-500 my-2">
              Devoted to better (spatial) audio capture, processing, and reproduction , enables
              computers to communicate with humans in conversational speech. Research directions:
              audio codec, far field signal processing with microphone array, speech separation and
              enhancement, speaker recognition, speech recognition, speech/singing synthesis, voice
              conversion/clone, etc.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center"
            variants={scrollAnimation}
          >
            <MachineLearning />
            <h4 className="text-black-600 text-xl font-medium leading-relaxed lg:text-2xl">
              Machine Learning
            </h4>
            <p className="text-black-500 my-2">
              Automatically analyze and learn rules from data, and use rules to make predictions on
              unknown data. Research directions: machine learning theory, meta-learning, federated
              learning, deep graph learning, generative learning, sequence learning, automated
              machine learning, reinforcement learning, etc.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
    </div>
  )
}

export default Expertise
