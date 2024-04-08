import Image from 'next/image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/getScrollAnimation'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

const features = [
  'Discover & Elaborate',
  'Proof-of-Concept Development',
  'Deployment and Production',
  'Post-Release Improvements and Maintenance',
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-16"
      id="feature"
    >
      <div className="p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/static/images/Illustration2.png"
              alt="VPN Illustrasi"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl font-medium leading-relaxed text-black-600 lg:text-4xl">
              Stay Ahead of AI Technology
            </h3>
            <p className="my-2 text-black-500">
              Unlock the power of machine learning (ML), deep learning (DL) and leverage AI to
              address your organization’s unique challenges
            </p>
            <ul className="ml-8 list-inside self-start text-black-500">
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
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default Feature
