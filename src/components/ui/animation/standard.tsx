'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type StandardAnimationProps = { children: ReactNode }

export const StandardAnimation = ({ children }: StandardAnimationProps) => {
  const path = usePathname()

  return (
    <motion.div
      key={path}
      initial={{
        y: 10,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
