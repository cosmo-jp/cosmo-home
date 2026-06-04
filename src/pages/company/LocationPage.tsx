import { Container } from 'react-bootstrap'
import GoogleMap from '../../components/GoogleMap'
import mapsFlagsIcon from '../../assets/icon/maps-flags.png'
import phoneIcon from '../../assets/icon/phone.png'
import printerIcon from '../../assets/icon/printer.png'
import '../../styles/LocationPage.css'

function LocationPage() {
  return (
    <main className="sub-page location-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>アクセス</h1>
        </Container>
      </section>

      <section className="location-map-section">
        <p className="page-title">
          アクセス
        </p>
        <p className="location-description">
          <span className="line-hibiya">日比谷線</span>「
          <strong>築地駅</strong>」より徒歩6分、
          <span className="line-yurakucho">有楽町線</span>「
          <strong>新富町駅</strong>」より徒歩7分、
          <span className="line-oedo">大江戸線</span>「
          <strong>月島駅</strong>」より徒歩10分
        </p>
        <div className="map-panel">
          <GoogleMap />
        </div>
        <div className="location-info-grid">
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              <img src={phoneIcon} alt="" />
            </div>
            <h2>電話</h2>
            <p>03-5835-3771</p>
          </article>
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              <img src={printerIcon} alt="" />
            </div>
            <h2>FAX</h2>
            <p>03-5835-3772</p>
          </article>
          <article className="location-info-card">
            <div className="location-info-icon" aria-hidden="true">
              <img src={mapsFlagsIcon} alt="" />
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
