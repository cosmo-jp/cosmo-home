import { Container } from 'react-bootstrap'

function EscmPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>e-SCM</h1>
        </Container>
      </section>
      <section className="content-section">
        <Container fluid>
          <h2>e-SCM</h2>
          <p>
            공급망 전반의 정보 흐름을 연결하여 재고, 물류, 납기 관리를
            체계적으로 운영할 수 있도록 지원합니다.
          </p>
        </Container>
      </section>
    </main>
  )
}

export default EscmPage
