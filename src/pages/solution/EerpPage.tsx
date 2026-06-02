import { Container } from 'react-bootstrap'

function EerpPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>e-ERP</h1>
        </Container>
      </section>
      <section className="content-section">
        <Container fluid>
          <h2>e-ERP</h2>
          <p>
            기업의 인사, 회계, 구매, 영업 등 주요 업무 데이터를 통합하여
            효율적인 경영 관리를 지원하는 솔루션입니다.
          </p>
        </Container>
      </section>
    </main>
  )
}

export default EerpPage
