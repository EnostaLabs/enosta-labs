'use client'

import Image from '@/components/containers/Image'

import { HeadingOne, HeadingTwo, TwoColumnsContainer } from '@/components/styles/layout.styled'
import { ImageHolder } from '@/components/styles/about/_components/ApplicationArea.styled'

export default function ApplicationArea() {
  return (
    <div className="mt-4">
      <HeadingOne className="my-2">Our Application Area</HeadingOne>

      <TwoColumnsContainer>
        <div>
          <ImageHolder>
            <Image
              src="/static/images/social_ai.png"
              alt=""
              quality={100}
              height={200}
              width={200}
            />
          </ImageHolder>
          <HeadingTwo>Social AI - Human Interaction</HeadingTwo>
          <p className="my-2">
            The future of both human-machine and human-human interaction is here. We're building
            interfaces that understand natural conversation, leverage image recognition for seamless
            interaction, and even generate AI-powered contents to create truly personalized
            experiences.
          </p>
        </div>
        <div>
          <ImageHolder>
            <Image
              src="/static/images/education_ai.png"
              alt=""
              quality={100}
              height={200}
              width={200}
            />
          </ImageHolder>
          <HeadingTwo>Education</HeadingTwo>
          <p className="my-2">
            AI tutors / teaching assistants are going beyond rote memorization. We're developing
            intelligent agents that tailor learning to individual needs, identify knowledge gaps in
            real-time, and provide personalized feedback to unlock every student's full potential.
          </p>
        </div>
      </TwoColumnsContainer>
      <TwoColumnsContainer>
        <div>
          <ImageHolder>
            <Image
              src="/static/images/smart_management.jpg"
              alt=""
              quality={100}
              height={200}
              width={200}
            />
          </ImageHolder>
          <HeadingTwo>Smart Management</HeadingTwo>
          <p className="my-2">
            We are helping businesses revolutionizing management, boosting efficiency with
            AI-powered tools for predictive analytics, resource optimization, and personalized
            customer service. These capabilities free managers to focus on strategic planning,
            employee development, and improved communication within teams, all while AI empowers
            data-driven decisions, risk management, and a more skilled workforce.
          </p>
        </div>
        <div>
          <ImageHolder>
            <Image
              src="/static/images/healthcare.jpg"
              alt=""
              quality={100}
              height={200}
              width={200}
            />
          </ImageHolder>
          <HeadingTwo>Healthcare</HeadingTwo>
          <p className="my-2">
            AI is revolutionizing healthcare, from precision medicine that tailors treatments and
            predicts outbreaks to AI-powered surgical robots for minimally invasive procedures.
            We're also developing AI assistants that answer patient questions and schedule
            appointments, all working to empower healthcare professionals in making decisions,
            improve patient outcomes, and create a more efficient healthcare system.
          </p>
        </div>
      </TwoColumnsContainer>
    </div>
  )
}
