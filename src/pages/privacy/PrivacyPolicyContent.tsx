import { Container } from "react-bootstrap"
import pmarkImage from '../../assets/security/Pmark85_JP.gif'

function PrivacyPolicyContent() {
  return (
    <Container>
      <article className="privacy-content">
        <h2>個人情報保護方針</h2>
          <p className="privacy-policy-date">
            制定日：２０１６年９月２０日<br/>
            改定日：２０２３年９月２０日
          </p>
          <p className="privacy-policy-description">        
            株式会社コスモコンサルティング（以下当社といいます）は、個人情報をより厳正に取り扱う為、JIS Q 15001に準拠した個人情報保護方針を基に 個人情報保護規定等を策定し、外的環境を把握した上で個人情報保護マネージメントシステムを運営しております。
            また、実際に個人情報を取り扱うにあたり、組織的、人的、物理的、技術的の観点より安全管理措置を講じております。
          </p>
          <p className="privacy-policy-description">
            弊社はコンピューターシステムの一括受託開発業務、コンピューターシステム構築のコンサルティング業務、コンピューターシステム稼動後の保守作業業務、 コンピューターシステム開発の作業請負業務展開していますが、それに関連して取り扱うすべての個人情報及び保有している従業員他の
            個人情報を保護するためのマネジメントシステムの構築にあたって、その方針を以下に宣言します。
          </p>
          <ol>
            <li>当社のコスモコンサルティング業務において、適正な個人情報の取得、利用及び提供が確実に実施されるような体制を維持します。</li>
            <li>個人情報を取得するにあたっては、利用目的を明示するとともに、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行ないません。</li>
            <li>当社が取り扱う個人情報へのあらゆるリスク（漏えい、滅失またはき損）に対して、効果的な安全対策等の予防処置及び是正処置を講じる。</li>
            <li>個人情報の取扱いに関する法令、国が定める指針その他の規範を常に監視し、遵守します。</li>
            <li>個人情報保護のための個人情報保護マネジメントシステムを構築し、内部監査、教育訓練、定期的な見直しを通じて、継続的な改善を行い、適正な管理体制を維持します。</li>
          </ol>
          <p className="privacy-policy-signature">
            コスモコンサルティング株式会社<br/>
            代表取締役：白山　敞
          </p>
          <div className="privacy-policy-footer">
            <p className="privacy-policy-contact">
              個人情報保護方針等に関する問合せ先：コスモコンサルティング株式会社<br/>
              担当部署：営業統括部（井上賢治）<br/>
              連絡先：０３－５８３５－３７７１
            </p>
            <p className="p-mark">
              <a className="site-footer-mark-link"
                href="https://privacymark.jp/"
                rel="noreferrer"
                target="_blank">
                <img className="site-footer-mark" src={pmarkImage} alt="Pマーク" />
              </a>
            </p>
          </div>
      </article>
    </Container>
  )
}

export default PrivacyPolicyContent
