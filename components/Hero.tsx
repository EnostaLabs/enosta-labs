import React, { useMemo } from 'react'
import Image from 'next/image'
import ButtonPrimary from '@/components/misc/ButtonPrimary'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/getScrollAnimation'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

const Hero = ({
  listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/static/icons/heroicons_sm-user.svg',
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/static/icons/gridicons_location.svg',
    },
    {
      name: 'Server',
      number: '50',
      icon: '/static/icons/bx_bxs-server.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto max-w-screen-xl px-8 xl:px-16" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1"
          variants={scrollAnimation}
        >
          <div className=" row-start-2 flex flex-col items-start justify-center sm:row-start-1">
            <h1 className="text-3xl font-medium leading-normal text-black-600 lg:text-4xl xl:text-5xl">
              Make anything with <strong>EnostaLabs</strong>
            </h1>
            <p className="mb-6 mt-4 text-black-500">Discover interesting services from us.</p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/static/images/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg bg-white-500 py-9 sm:grid-flow-row sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="mx-auto flex w-8/12 items-center justify-start px-4 py-4 sm:mx-0 sm:w-auto sm:justify-center sm:py-6"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="mx-auto flex w-40 sm:w-auto">
                <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Image src={listUsers.icon} className="h-6 w-6" alt="" width={500} height={500} />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black-600">{listUsers.number}+</p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="roudned-lg absolute left-0 right-0 top-0 mx-auto mt-8 h-64 w-11/12 bg-black-600 opacity-5 sm:h-48"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
