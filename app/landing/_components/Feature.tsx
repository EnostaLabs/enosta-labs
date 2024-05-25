import Image from '@/components/containers/Image'
import React from 'react'
import ScrollAnimationWrapper from '@/components/motions/ScrollAnimationWrapper'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import getScrollAnimation from '@/utils/getScrollAnimation'
import { HeadingOne } from '@/components/styles/layout.styled'

const features = [
  'Discover & Elaborate',
  'Proof-of-Concept Development',
  'Deployment and Production',
  'Post-Release Improvements and Maintenance',
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-16">
      <div className="y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="justify-end">
          <Image
            src="/static/images/hightech_lab_2.jpg"
            alt=""
            quality={100}
            height={414}
            width={508}
          />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <HeadingOne>Stay ahead of Emerging Technologies</HeadingOne>
          <p className="my-2">
            Unlock the power of emergine technologies like Machine Learning, Deep Learning, Data
            Science, and Blockchain to address your organization’s unique challenges.
          </p>
          <ul className="ml-8 list-inside self-start">
            {features.map((feature, index) => (
              <motion.li
                className="circle-check custom-list relative"
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default Feature
