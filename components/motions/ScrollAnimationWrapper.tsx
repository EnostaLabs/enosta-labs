import getScrollAnimation from '@/utils/getScrollAnimation'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function ScrollAnimationWrapper({ children, className = '', ...props }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className + ' ml-auto flex w-full flex-col'}
      {...props}
      variants={scrollAnimation}
    >
      {children}
    </motion.div>
  )
}
