import { Container } from 'react-bootstrap'
import '../../styles/MessagePage.css'

function MessagePage() {
  return (
    <main className="sub-page">
      <section className="sub-hero banner-message message-banner">
        <Container fluid>
          <h1>メッセージ</h1>
        </Container>
      </section>
      <section className="message-section">
        <Container className="message-info" fluid>
          <p className="page-title">
            メッセージ
          </p>
          <div className="message-layout">
            <article className="message-card">
              <p className="message-company">
                コスモコンサルティング株式会社
                <br />
                代表取締役
              </p>
              <h2>白山　敬[SIRAYAMA TAKASI]</h2>

              <h3>「初心」</h3>
              <p>最初の心構えを忘れずに持ち続ける。</p>
              <p>これが弊社の社訓です。</p>
              <p>
                「初心を持って、責任ある行動をし、自分自身の向上は無論、
                会社に貢献する。」と言うことです。
              </p>

              <p>
                弊社はSystemIntergrationを中核に、
                <br />
                パッケージソフトウェアの展開を行っております。
              </p>

              <p>
                e-ERP、e-SCM、e-Procurement、e-Market Place、
                e-ShoppingMall Wizard、
                <br />
                e-HomePage Wizardのソリューションをご提供いたします。
              </p>

              <p>
                また、JAVA、.NET、C系列、VB系列及び組込み系等の専門要員が御社の
                システム構築をコンサルティングサービスから、開発、保守までを
                一元化し、
                <br />
                「なせばなる。」との信念を持って、サポートさせていただきます。
              </p>

              <p>
                今後とも、より一層のご指導・ご愛顧賜りますようよろしくお願い
                申し上げます。
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default MessagePage
