'use client'
import React, { useMemo } from 'react'
import Image from '@/components/containers/Image'

import { HeadingOne } from '@/components/styles/layout.styled'

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className=" grid grid-flow-row grid-rows-2 gap-8 pb-6 sm:grid-flow-col sm:grid-cols-2 sm:pb-16 md:grid-rows-1">
        <div className="row-start-2 flex flex-col items-start justify-center sm:row-start-1">
          <HeadingOne>
            Meet our team at <strong>EnostaLabs</strong>
          </HeadingOne>
          <p className="mb-6 mt-4">Everything about us.</p>
        </div>
        <div className="flex w-full">
          <Image
            src="/static/images/meet_the_team.png"
            alt=""
            quality={100}
            width={612}
            height={383}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
