import React from 'react'

import ScrollAnimationWrapper from '@/components/motions/ScrollAnimationWrapper'
import ComputerVision from '../../../public/static/icons/computer_vision.svg'
import NLP from '../../../public/static/icons/nlp.svg'
import Speech from '../../../public/static/icons/speech.svg'
import GenAI from '../../../public/static/icons/gen_ai.svg'
import DataScience from '../../../public/static/icons/data_science.svg'
import Blockchain from '../../../public/static/icons/blockchain.svg'
import RPA from '../../../public/static/icons/rpa.svg'

import MachineLearning from '../../../public/static/icons/machine_learning.svg'
import { HeadingOne, HeadingTwo, TwoColumnsContainer } from '@/components/styles/layout.styled'

const Expertise = () => {
  return (
    <div
      className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-12"
      id="expertise"
    >
      <ScrollAnimationWrapper>
        <HeadingOne>Our areas of expertise</HeadingOne>
        <p className="my-2">
          We work on almost all areas of AI/ML, Data Science, and Blockchain, including some
          outstanding focuses as below.
        </p>
      </ScrollAnimationWrapper>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <GenAI />
          <HeadingTwo>Generative AI</HeadingTwo>
          <p className="my-2">
            Harness the power of AI to create entirely new content. By training models on vast
            datasets of text, images, audio, and code, we can generate everything from original
            writing and music to photorealistic landscapes and innovative sound effects, pushing the
            boundaries of creative exploration and application across diverse fields.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ComputerVision />
          <HeadingTwo>Computer Vision</HeadingTwo>
          <p className="my-2">
            Empower machines to see and interpret the world around them. We delve into cutting-edge
            research areas like large-scale image classification, semantic segmentation, and image
            captioning. Additionally, we push the boundaries of object detection, tracking, and
            recognition, even tackling the 3D modeling and generation of human forms. We extend our
            vision to video as well, enabling intelligent analysis, classification, summarization,
            captioning, search, and recommendation systems.
          </p>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <NLP />
          <HeadingTwo>Natural Language Processing</HeadingTwo>
          <p className="my-2">
            Bridge the gap between humans and machines through the power of language. We focus on
            cutting-edge research in text understanding, generation, dialogue systems, and machine
            translation. This allows us to develop next-generation NLP technologies with real-world
            applications, empowering machines to interact naturally and fostering innovative
            business solutions.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Speech />
          <HeadingTwo>Speech Processing</HeadingTwo>
          <p className="my-2">
            Unlock the power of human conversation for machines. We tackle cutting-edge areas like
            audio capture, processing, and reproduction, along with advanced algorithms for
            far-field speech recognition and enhancement. This allows us to develop technologies for
            machines to understand and respond in natural speech, including speaker identification,
            speech synthesis, and even voice conversion.
          </p>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <MachineLearning />
          <HeadingTwo>Machine Learning</HeadingTwo>
          <p className="my-2">
            Empower machines to learn and adapt from data. We delve into a vast array of research
            avenues, including core machine learning theory, meta-learning for faster adaptation,
            and federated learning for secure collaboration. Additionally, we push the boundaries of
            automated machine learning for streamlined model development and reinforcement learning
            for intelligent decision-making.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <DataScience />
          <HeadingTwo>Data Science</HeadingTwo>
          <p className="my-2">
            Unlock the secrets hidden within data. We combine powerful statistical methods, advanced
            algorithms, and machine learning with deep domain expertise. This allows us to extract
            meaningful insights from massive datasets, structured or unstructured. We explore a wide
            range of applications, transforming data into knowledge for informed decision-making
            across various fields.
          </p>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <ScrollAnimationWrapper>
          <RPA />
          <HeadingTwo>Robotic Process Automation</HeadingTwo>
          <p className="my-2">
            Streamline workflows and boosts efficiency through intelligent automation. We develop
            software robots that mimic human actions, automating repetitive and rule-based tasks
            across various applications. This frees up your human workforce to focus on higher-value
            activities, leading to increased productivity, reduced errors, and improved cost
            savings.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Blockchain />
          <HeadingTwo>Blockchain</HeadingTwo>
          <p className="my-2">
            Unlock the power of secure and transparent data collaboration. We explore the potential
            of blockchain technology and distributed ledger systems to revolutionize data
            management. Our research focuses on secure data sharing, tamper-proof record keeping,
            and decentralized applications. This allows us to build trust and transparency across
            networks, fostering innovative solutions for various industries.
          </p>
        </ScrollAnimationWrapper>
      </TwoColumnsContainer>
    </div>
  )
}

export default Expertise
