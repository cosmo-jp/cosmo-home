import { useState } from 'react'
import { Modal } from 'react-bootstrap'

type SolutionImageProps = {
  alt: string
  src: string
}

function SolutionImage({ alt, src }: SolutionImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <button
        aria-label={`${alt} 확대보기`}
        className="solution-image-button"
        onClick={handleOpen}
        type="button"
      >
        <img src={src} alt={alt} />
      </button>
      <Modal
        centered
        className="solution-image-modal"
        fullscreen
        onHide={() => setIsOpen(false)}
        show={isOpen}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <img src={src} alt={alt} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SolutionImage
