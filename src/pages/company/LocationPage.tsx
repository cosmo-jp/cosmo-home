import { Container } from 'react-bootstrap'
import GoogleMap from '../../components/GoogleMap'
import '../../styles/LocationPage.css'

function LocationPage() {
  return (
    <main className="sub-page location-page">
      <section className="sub-hero">
        <Container fluid>
          <h1>오시는길</h1>
        </Container>
      </section>

      <section className="location-map-section">
        <div className="map-panel">
          <GoogleMap />
        </div>
        <div className="location-info-grid">
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              {/* 電話아이콘 추가 */}
            </div>
            <h2>電話</h2>
            <p>03-5835-3771</p>
          </article>
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              {/* FAX아이콘 추가 */}
            </div>
            <h2>FAX</h2>
            <p>03-5835-3772</p>
          </article>
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              {/* 좌표아이콘 추가 */}
            </div>
            <h2>住所</h2>
            <p>
              東京都中央区明石町8-1
              <br />
              聖路加タワー34F
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default LocationPage
