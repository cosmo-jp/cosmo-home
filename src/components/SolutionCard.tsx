import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type SolutionCardProps = {
  title: string
  description: string
  image: string
  path: string
}

function SolutionCard({
  title,
  description,
  image,
  path,
}: SolutionCardProps) {
  return (
    <Card as={Link} className="feature-card h-100" to={path}>
      <Card.Img
        alt={`${title} ソリューション`}
        className="feature-card-image"
        src={image}
        variant="top"
      />
      <span aria-hidden="true" className="feature-card-overlay">
        <span className="feature-card-detail">詳細を見る</span>
      </span>
      <Card.Body>
        <Card.Title as="h4">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SolutionCard
