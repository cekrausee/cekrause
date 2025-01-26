'use client'

export type DownloadButtonProps = {
  content: string
  name: string
}

const downloadJson = (content: string, name: string) => {
  const a = document.createElement('a')

  a.setAttribute('href', `data:application/json;charset=utf-8,${encodeURIComponent(content)}`)
  a.setAttribute('download', `${name}.json`)
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const DownloadJsonButtons = ({ content, name }: DownloadButtonProps) => {
  const handleClick = () => downloadJson(content, name)

  return (
    <button
      onClick={handleClick}
      className='link'
    >
      Download
    </button>
  )
}
