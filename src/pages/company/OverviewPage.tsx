import { Container } from 'react-bootstrap'
import '../../styles/OverviewPage.css'

const overviewItems = [
  ['法人名', 'コスモコンサルティング株式会社'],
  ['代表取締役', '白山　敞'],
  ['設立年月', '平成１８年１２月'],
  ['資本金', '５０，０００，０００円'],
  ['所在地', '〒104-0044 東京都中央区明石町8-1　聖路加タワー34F'],
  ['代表番号', 'TEL : 03-5835-3771<br/>FAX : 03-5835-3772'],
  ['Ｅメール', 'japan@cosmo-global.com'],
  ['ＵＲＬ', 'http://www.cosmo-global.com'],
  ['事業内容', 'システムコンサルテーション<br/>システム開発運用保守<br/>電子商取引（ＥＣ）<br/>ｅ－ＭａｒｋｅｔＰｌａｃｅ<br/>電子調達システム（ｅ－Ｐｒｏｃｕｒｅｍｅｎｔ）<br/>全社的資源管理システム（ｅ－ＥＲＰ）<br/>供給網管理システム（ｅ－ＳＣＭ）<br/>Ｂｕｓｉｎｅｓｓ　Ｍｏｄｅｌ開発<br/>QuantumComputerの研究・開発<br/>ＡＩ（人工知能）の研究・開発'],

  
]

function renderLineBreaks(text: string) {
  return text.split('<br/>').map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ))
}

function OverviewPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>会社概要</h1>
        </Container>
      </section>
      <section className="overview-section">
        <Container className="overview-container" fluid>
          <p className="page-title">
            会社概要
          </p>
          <dl className="overview-list">
            {overviewItems.map(([title, description]) => (
              <div className="overview-row" key={title}>
                <dt>{title}</dt>
                <dd>{renderLineBreaks(description)}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </main>
  )
}

export default OverviewPage
