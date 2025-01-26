import { JsonButtons } from '@/components/ui/button/file-buttons'

const content = JSON.stringify(
  {
    experimentalTernaries: true,
    jsxSingleQuote: true,
    printWidth: 160,
    semi: false,
    singleAttributePerLine: true,
    singleQuote: true,
    trailingComma: 'none',
    plugins: ['prettier-plugin-tailwindcss']
  },
  null,
  2
)

const PrettierPage = () => (
  <pre className='text-sm'>
    <JsonButtons download={{ content, name: 'cekrause_.prettierrc' }} />
    <br />
    <br />
    {content}
  </pre>
)

export default PrettierPage
