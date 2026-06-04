import { Card, Col, Container, Row } from 'react-bootstrap'

function ContactPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <Container fluid>
          <h1>お問い合わせ</h1>
        </Container>
      </section>

      <section className="content-section">
        <Container fluid>
          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title as="h3">문의 분야</Card.Title>
                  <Card.Text>신규 구축, 기존 시스템 개선, 운영 지원</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title as="h3">진행 방식</Card.Title>
                  <Card.Text>요구사항 확인 후 일정과 범위를 함께 정리합니다.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title as="h3">응답 안내</Card.Title>
                  <Card.Text>문의 내용을 검토한 뒤 담당자가 연락드립니다.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default ContactPage
