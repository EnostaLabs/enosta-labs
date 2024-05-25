'use client'
import { Divider } from '@nextui-org/divider'
import Expertise from './_components/Expertise'
import Feature from './_components/Feature'

import Hero from './_components/Hero'

export default function Landing() {
  return (
    <>
      <Hero />
      <Divider />
      <Feature />
      <Divider />
      <Expertise />
    </>
  )
}
