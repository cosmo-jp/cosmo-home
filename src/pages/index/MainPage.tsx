import { Col, Container, Row } from 'react-bootstrap'
import erpBanner from '../../assets/banner/erp_banner.png'
import homepageBanner from '../../assets/banner/homepage_banner.png'
import marketBanner from '../../assets/banner/market_banner.png'
import procureBanner from '../../assets/banner/procure_banner.png'
import scmBanner from '../../assets/banner/scm_banner.png'
import shoppingmallBanner from '../../assets/banner/shoppingmall_banner.png'
import SolutionCard from '../../components/SolutionCard'
import '../../styles/MainPage.css'

const features = [
  {
    title: 'e-ERP',
    description: '企業活動に必要な基幹業務を統合し、経営情報を一元管理します。',
    image: erpBanner,
    path: '/solution/e-erp',
  },
  {
    title: 'e-SCM',
    description: '受発注から在庫、物流までサプライチェーン全体を効率化します。',
    image: scmBanner,
    path: '/solution/e-scm',
  },
  {
    title: 'e-Procurement',
    description: '購買業務の電子化により、調達プロセスの最適化を支援します。',
    image: procureBanner,
    path: '/solution/e-procurement',
  },
  {
    title: 'e-MarketPlace',
    description: '企業間取引を支える電子市場と多様な商取引機能を提供します。',
    image: marketBanner,
    path: '/solution/e-marketplace',
  },
  {
    title: 'e-shoppingMallWizard',
    description: '高機能なショッピングモールを効率よく構築、運営できます。',
    image: shoppingmallBanner,
    path: '/solution/e-shoppingmall-wizard',
  },
  {
    title: 'e-HomePageWizard',
    description: '専門知識がなくても企業ホームページを簡単に作成、更新できます。',
    image: homepageBanner,
    path: '/solution/e-homepage-wizard',
  },
]

function MainPage() {
  return (
    <main className="main-page">
      <section className="hero-section" id="about">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1>コスモコンサルティング</h1>
              <div className="hero-description">
                <p>COSMO GLOBAL SYSTEMS は B2B（Business to　Business）、</p>
                <p>B2C（Business to Customers）、G2B（Government to Business）の為の</p>
                <p>Business Portal Site　を運営し、e-business 構築の為の Solution 提供及び　consulting から管理までを一括受注開発します。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section" id="services">
        <Container fluid>
          <div className="section-heading">
            <p className="eyebrow section-title">IT ソリューション</p>
          </div>
          <Row className="solution-feature-grid g-4">
            {features.map((feature) => (
              <Col key={feature.title} md={4}>
                <SolutionCard {...feature} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default MainPage
