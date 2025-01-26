import { BackLink } from '../link/back'
import { DownloadButtonProps, DownloadJsonButtons } from './download'

export const JsonButtons = ({ download }: { download: DownloadButtonProps }) => (
  <span>
    <DownloadJsonButtons {...download} /> or <BackLink />
  </span>
)
