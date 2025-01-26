import { JsonButtons } from '@/components/ui/button/file-buttons'

const content = JSON.stringify(
  [
    {
      key: 'cmd+n',
      command: 'explorer.newFile'
    },
    {
      key: 'cmd+m',
      command: 'explorer.newFolder'
    }
  ],
  null,
  2
)

const KeybindingsPage = () => (
  <pre className='text-sm'>
    <JsonButtons download={{ content, name: 'cekrause_vscode_keybindings' }} />
    <br />
    <br />
    {content}
  </pre>
)

export default KeybindingsPage
