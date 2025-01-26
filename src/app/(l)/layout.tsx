import { ReactNode } from 'react'

const L = ({ children }: { children: ReactNode }) => (
  <main className='mx-auto flex min-h-svh max-w-screen-md justify-center space-y-12 px-3 pb-6 pt-24 lg:justify-normal'>{children}</main>
)

export default L
