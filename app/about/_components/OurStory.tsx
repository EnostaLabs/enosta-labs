'use client'
import { HeadingOne, TwoColumnsContainer } from '@/components/styles/layout.styled'

export default function OurStory() {
  return (
    <div className="mt-4">
      <TwoColumnsContainer>
        <HeadingOne>Our Story</HeadingOne>
        <p className="text-justify">
          EnostaLabs was established in 2024 with a core belief: the transformative potential of
          advanced technology should be accessible to all. We recognized a critical gap –
          groundbreaking advancements were often hindered by complexity, requiring specialized
          knowledge or significant resources. Driven by this observation, we assembled a team of
          accomplished individuals with expertise in various disciplines. From the field of
          Artificial Intelligence/Machine Learning, leveraging the power of intelligent machines, to
          Data Science, the art of extracting valuable insights from information, and the Blockchain
          and Internet of Things (IoT), connecting everyday objects to a vast network, our team
          brings together diverse perspectives. Through collaborative innovation, we are at the
          forefront of developing user-friendly solutions that harness the power of technology for
          the benefit of all.
        </p>
      </TwoColumnsContainer>
    </div>
  )
}
