import Link from 'next/link'
import { Fragment } from 'react'

const comma = (i: number, arg: unknown[]) => (i === arg.length - 1 ? '' : ',')

const entries = Object.entries({
  name: <span className='font-bold'>Henrique Krause</span>,
  role: 'Software Engineer',
  location: 'Lisbon, Portugal',
  company: (
    <Link
      href='https://clinia.io'
      target='_blank'
      className='link'
    >
      Clinia
    </Link>
  ),
  study: (
    <>
      Software Engineering,{' '}
      <Link
        href='https://iade.europeia.pt'
        target='_blank'
        className='link'
      >
        IADE
      </Link>
    </>
  ),
  techs: ['JavaScript', 'TypeScript', 'Node.js', 'React.js'],
  links: [
    <Link
      key='github'
      href='https://github.com/cekrausee'
      target='_blank'
      className='link'
    >
      GitHub
    </Link>,
    <Link
      key='LinkedIn'
      href='https://linkedin.com/in/cekrause'
      target='_blank'
      className='link'
    >
      LinkedIn
    </Link>
  ],
  picture: (
    <Link
      href='/me.png'
      target='_blank'
      className='link'
    >
      https://cekrause.eu/me.png
    </Link>
  )
})

const Page = () => (
  <main className='mx-auto flex min-h-svh max-w-screen-md justify-center space-y-12 px-3 pt-24 lg:justify-normal'>
    <pre className='text-sm'>
      <span className='font-bold'>const</span> obj: {'{'}
      <br />
      {entries.map(([key, val], i) => {
        const arr = Array.isArray(val)

        return (
          <Fragment key={key}>
            {`  "${key}": `}
            {!arr && <>&quot;{val}&quot;</>}
            {arr && (
              <>
                {'['}
                <br />
                {val.map((v, i) => (
                  <Fragment key={i}>
                    {'    '}
                    &quot;{v}&quot;{comma(i, val)}
                    <br />
                  </Fragment>
                ))}
                {'  ]'}
              </>
            )}
            {comma(i, entries)}
            <br />
          </Fragment>
        )
      })}
      {'}'}
    </pre>
  </main>
)

export default Page
