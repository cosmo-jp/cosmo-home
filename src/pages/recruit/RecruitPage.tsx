import { Container } from 'react-bootstrap'
import '../../styles/RecruitPage.css'

const recruitItems = [
  ['募集時期', '随時採用'],
  ['応募資格', '仕事に固い意志と情熱がある者 ・海外勤務に欠格事由がない者<br/>情報システムに関するシステムエンジニアおよびプログラマ'],
  ['提出書類', '経歴社員：履歴書、自己紹介書、経歴書、資格証明書及び認証書<br/>新入社員：履歴書、自己紹介書、資格証明書及び認証書'],
  ['採用方法', 'Ｅメール受付及び訪問受付'],
  ['給与等', '面談後、別途相談<br/>経験・能力を考慮の上、当社規定により優遇します。'],
  ['勤務時間', '９：００～１８：００（客先に準ずる）<br/>休日：土曜、日曜、祝日、慶弔休暇等'],
  ['提出先及び採用問い合せ', '〒104-0044<br/>東京都中央区明石町8-1　聖路加タワー34F<br/>TEL : 03-5835-3970<br/>FAX : 03-5835-3971<br/>Ｅメール：japan@cosmo-global.com'],
  ['その他', '履歴・経歴書等に偽りがあった場合には、合格及び入社を取消すことがあります。<br/>仕事の特性、職種によって、手続きや応募資格に差があります。<br/>詳しいことは当社の採用担当者宛にお問い合わせ下さい。'],
] 

function renderLineBreaks(text: string) {
  return text.split('<br/>').map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ))
}

function RecruitPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message recruit-banner">
        <Container fluid>
          <h1>採用情報</h1>
        </Container>
      </section>
      <section className="recruit-section">
        <Container className="recruit-container" fluid>
          <p className="page-title">採用情報</p>
          <dl className="recruit-list">
            {recruitItems.map(([title, description]) => (
              <div className="recruit-row" key={title}>
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

export default RecruitPage
