import { Container } from 'react-bootstrap'

function EprocurementPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>e-Procurement</h1>
        </Container>
      </section>
      <section className="content-section">
        <Container fluid>
          <h2>e-Procurement</h2>
          <p>
            구매 요청부터 승인, 발주, 정산까지의 조달 업무를 온라인으로
            표준화하여 업무 속도와 투명성을 높입니다.
          </p>
        </Container>
      </section>
    </main>
  )
}

export default EprocurementPage
