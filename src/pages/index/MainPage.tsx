import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { increment } from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import '../../styles/MainPage.css'

const features = [
  {
    title: 'Common layout',
    description: 'Header and footer are separated into reusable components.',
  },
  {
    title: 'Main page',
    description: 'The index page owns the visible home screen content.',
  },
  {
    title: 'Redux ready',
    description: 'The page uses the shared store through typed hooks.',
  },
]

function MainPage() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <main className="main-page">
      <section className="hero-section" id="about">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={8}>
              <p className="eyebrow">React starter project</p>
              <h1>Cosmo Home</h1>
              <p className="hero-description">
                A clean base screen with shared layout components and Redux
                state ready for feature development.
              </p>
              <div className="hero-actions">
                <Button onClick={() => navigate('/service')} variant="dark">
                  서비스 보기
                </Button>
                <Button
                  type="button"
                  onClick={() => dispatch(increment())}
                  variant="outline-dark"
                >
                  Redux count: {count}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section" id="services">
        <Container fluid>
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Basic page structure</h2>
          </div>
          <Row className="g-4">
            {features.map((feature) => (
              <Col key={feature.title} md={4}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <Card.Title as="h3">{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="contact-section" id="contact">
        <Container fluid>
          <h2>Ready to build</h2>
          <p>Use this page as the starting point for the next screen.</p>
        </Container>
      </section>
    </main>
  )
}

export default MainPage
