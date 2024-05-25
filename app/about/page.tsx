import { genPageMetadata } from 'app/seo'
import OurStory from './_components/OurStory'
import ApplicationArea from './_components/ApplicationArea'
import { Divider } from '@nextui-org/divider'
import Hero from './_components/Hero'
import OurTeam from './_components/OurTeam'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />
      <OurStory />
      <Divider />
      <ApplicationArea />
      <Divider />
      <OurTeam />
    </>
  )
}
