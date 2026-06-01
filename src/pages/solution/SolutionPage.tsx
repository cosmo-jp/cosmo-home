import { Card, Col, Container, Row } from 'react-bootstrap'

const solutionItems = [
  {
    title: '관리 시스템',
    description: '직원, 근태, 문서, 신청 업무를 한 곳에서 관리할 수 있습니다.',
  },
  {
    title: '데이터 연동',
    description: 'API 기반 연동으로 내부 시스템과 외부 서비스를 연결합니다.',
  },
  {
    title: '운영 자동화',
    description: '반복 작업을 줄이고 승인, 알림, 리포트 흐름을 자동화합니다.',
  },
]

function SolutionPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <Container fluid>
          <p className="eyebrow">Solution</p>
          <h1>솔루션</h1>
          <p>
            업무 흐름을 단순화하고 운영 효율을 높일 수 있는 맞춤형 웹 솔루션을
            제공합니다.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container fluid>
          <Row className="g-4">
            {solutionItems.map((item) => (
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

export default SolutionPage
