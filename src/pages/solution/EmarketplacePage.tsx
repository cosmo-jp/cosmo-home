import { Container } from 'react-bootstrap'

function EmarketplacePage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>e-MarketPlace</h1>
        </Container>
      </section>
      <section className="content-section">
        <Container fluid>
          <h2>e-MarketPlace</h2>
          <p>
            기업 간 거래와 상품 정보를 온라인에서 관리하고, 주문과 계약 흐름을
            효율적으로 연결하는 마켓플레이스 솔루션입니다.
          </p>
        </Container>
      </section>
    </main>
  )
}

export default EmarketplacePage
