import Link from 'next/link'
import { Fragment } from 'react'

const comma = (i: number, arg: unknown[]) => (i === arg.length - 1 ? '' : ',')

const entries = Object.entries({
  name: <b>Henrique Krause</b>,
  role: <b>Software Engineer</b>,
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
  files: [
    <Link
      key={'vscode_settings'}
      href='vscode-settings'
      className='link'
    >
      vscode_settings.json
    </Link>,
    <Link
      key={'vscode-keybindings'}
      href='vscode-keybindings'
      className='link'
    >
      vscode-keybindings.json
    </Link>,
    <Link
      key={'prettier-cfg'}
      href='prettier'
      className='link'
    >
      .prettierrc.json
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
  <pre className='text-sm'>
    <b>const</b> obj: {'{'}
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
)

export default Page
