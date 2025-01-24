'use client'

import { BackLink } from '@/components/ui/link/back'

const Error = () => (
  <main className='flex min-h-svh items-center justify-center'>
    <p className='text-xl'>
      Unknown error. <BackLink />
    </p>
  </main>
)

export default Error
