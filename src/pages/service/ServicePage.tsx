import { Card, Col, Container, Row } from 'react-bootstrap'

const serviceItems = [
  {
    title: '웹 화면 개발',
    description: 'React 기반의 사용자 화면과 관리자 화면을 구현합니다.',
  },
  {
    title: '기능 개선',
    description: '기존 프로젝트의 구조를 파악하고 필요한 기능을 안전하게 추가합니다.',
  },
  {
    title: '품질 확인',
    description: '빌드 확인과 화면 점검을 통해 변경 사항을 검증합니다.',
  },
]

function ServicePage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <Container fluid>
          <p className="eyebrow">Service</p>
          <h1>서비스</h1>
          <p>
            기획부터 화면 구현, 기능 개발, 운영 개선까지 필요한 단계를 함께
            진행합니다.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container fluid>
          <Row className="g-4">
            {serviceItems.map((item) => (
              <Col key={item.title} md={4}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <Card.Title as="h3">{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default ServicePage
