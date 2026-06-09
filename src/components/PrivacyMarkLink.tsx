import pmarkImage from '../assets/security/Pmark85_JP.gif'

type PrivacyMarkLinkProps = {
  linkClassName?: string
  imageClassName?: string
}

function PrivacyMarkLink({
  linkClassName,
  imageClassName,
}: PrivacyMarkLinkProps) {
  return (
    <a
      className={linkClassName}
      href="https://privacymark.jp/"
      rel="noreferrer"
      target="_blank"
    >
      <img className={imageClassName} src={pmarkImage} alt="Pマーク" />
    </a>
  )
}

export default PrivacyMarkLink
