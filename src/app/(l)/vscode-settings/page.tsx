import { JsonButtons } from '@/components/ui/button/file-buttons'

const content = JSON.stringify(
  {
    '[csharp]': {
      'editor.codeLens': false,
      'editor.defaultFormatter': 'csharpier.csharpier-vscode'
    },
    '[prisma]': { 'editor.defaultFormatter': 'Prisma.prisma' },
    'editor.codeActionsOnSave': { 'source.organizeImports': 'always' },
    // "editor.defaultFormatter": "vscode.typescript-language-features",
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.cursorStyle': 'block',
    'editor.fontLigatures': true,
    'editor.fontFamily': 'Source Code Pro',
    'editor.formatOnSave': true,
    'editor.fontSize': 11,
    'editor.lineHeight': 1.65,
    'editor.minimap.enabled': false,
    'editor.renderLineHighlight': 'gutter',
    'editor.renderWhitespace': 'none',
    'editor.scrollbar.horizontal': 'hidden',
    'explorer.compactFolders': false,
    'explorer.confirmDelete': false,
    'explorer.fileNesting.enabled': true,
    'explorer.fileNesting.patterns': {
      'turbo.json': '.prettierrc.json, .gitignore',
      'tsconfig.json':
        'next.config.ts, next-env.d.ts, tailwind.config.ts, postcss.config.mjs, components.json, drizzle.config.ts, eslint.config.*, .prettierrc.json, tsup.config.ts, tsconfig.tsbuildinfo, .gitignore',
      '.env': '.env.example'
    },
    'extensions.ignoreRecommendations': true,
    'git.autofetch': true,
    'git.confirmSync': false,
    'git.enableSmartCommit': true,
    'git.ignoreRebaseWarning': true,
    'git.openRepositoryInParentFolders': 'always',
    'github.copilot.editor.enableAutoCompletions': true,
    'github.copilot.enable': {
      '*': true,
      plaintext: false,
      markdown: false,
      scminput: false
    },
    'gitlens.views.scm.grouped.views': {
      commits: true,
      branches: true,
      remotes: true,
      stashes: false,
      tags: true,
      worktrees: true,
      contributors: true,
      repositories: false,
      searchAndCompare: false,
      launchpad: false
    },
    'javascript.updateImportsOnFileMove.enabled': 'always',
    'search.exclude': {
      'dist/*': true,
      '.next/*': true
    },
    'security.promptForLocalFileProtocolHandling': false,
    'symbols.hidesExplorerArrows': true,
    'terminal.integrated.cursorBlinking': true,
    'terminal.integrated.cursorStyle': 'block',
    'terminal.integrated.fontFamily': 'Source Code Pro',
    'terminal.integrated.fontSize': 11,
    'typescript.updateImportsOnFileMove.enabled': 'always',
    'window.commandCenter': false,
    'workbench.activityBar.location': 'hidden',
    'workbench.colorTheme': 'Min Dark',
    'workbench.editor.labelFormat': 'short',
    'workbench.iconTheme': 'symbols',
    'workbench.layoutControl.enabled': false,
    'workbench.productIconTheme': 'fluent-icons',
    'workbench.startupEditor': 'none',
    'workbench.statusBar.visible': false
    // INFO: Smooth animations
    // "editor.cursorBlinking": "phase",
    // "editor.cursorSmoothCaretAnimation": "on",
    // "editor.smoothScrolling": true,
    // "terminal.integrated.smoothScrolling": true,
    // "workbench.list.smoothScrolling": true
  },
  null,
  2
)

const VscodePage = () => (
  <pre className='text-sm'>
    <JsonButtons download={{ content, name: 'cekrause_vscode_settings' }} />
    <br />
    <br />
    {content}
  </pre>
)

export default VscodePage
