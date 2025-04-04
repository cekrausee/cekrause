import { BackLink } from '@/components/ui/link/back'

const NotFound = () => (
  <main className='flex min-h-svh items-center justify-center'>
    <p className='text-sm'>
      Page not found. <BackLink />
    </p>
  </main>
)

export default NotFound
