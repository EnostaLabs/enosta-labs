'use client'
import React, { useMemo } from 'react'
import Image from '@/components/containers/Image'
import ButtonPrimary from '@/components/misc/ButtonPrimary'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/getScrollAnimation'
import ScrollAnimationWrapper from '@/components/motions/ScrollAnimationWrapper'
import { HeadingOne } from '@/components/styles/layout.styled'
import Link from 'next/link'

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto max-w-screen-xl px-8 xl:px-16">
      <ScrollAnimationWrapper className="grid grid-flow-row grid-rows-2 gap-8 pb-6 sm:grid-flow-col sm:grid-cols-2 sm:pb-16 md:grid-rows-1">
        <div className="row-start-2 flex flex-col items-start justify-center sm:row-start-1">
          <HeadingOne>
            Make anything with <strong>EnostaLabs</strong>
          </HeadingOne>
          <p className="mb-6 mt-4">Discover interesting services from us.</p>
          <Link href="/#expertise">
            <ButtonPrimary>Get Started</ButtonPrimary>
          </Link>
        </div>
        <div className="flex w-full">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src="/static/images/hightech_lab.jpg"
              alt=""
              quality={100}
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default Hero
