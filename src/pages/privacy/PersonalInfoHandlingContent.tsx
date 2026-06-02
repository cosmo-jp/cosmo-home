import { Container } from 'react-bootstrap'

function PersonalInfoHandlingContent() {
  return (
    <Container>
      <article className="privacy-content">
        <h2>個人情報の取扱について</h2>
        <p>
          当社は、以下の目的（以下「利用目的」といいます）のために個人情報を適切に取得し、これを利用します。<br/>
          また、当社は、お客様ご本人及びお取引様からお預かりした個人情報を、利用目的の達成に必要な範囲内で利用させて頂きます。    
        </p>

        <dl className="privacy-definition-list">
          <div className="privacy-definition-item">
            <dt>1.&nbsp;&nbsp;個人情報の利用目的</dt>
            <dd>
              <ol>
                <li>
                    <p>個人情報の利用目的</p>
                    <p>下記内容については、保有個人データとして開示等の請求に応じます。</p>
                    <ol className="circled-list">
                      <li>事業者への営業・システムコンサルティングサービスを提供するため</li>
                      <li>当社へのお問い合わせ、資料請求及びその他ご依頼等への対応のため</li>
                      <li>客先入館証交付申請で個人情報を利用することになる客先常駐作業履行のため</li>
                      <li>当社へ入社を希望される方への連絡、情報のご提供、および採用選考を行うため</li>
                      <li>従業員の皆様への連絡、情報のご提供、および人事・労務管理を行うため</li>
                    </ol>
                    <p>技術員を当社事業のシステム開発、運用保守等の履行に利用するため</p>
                </li>
                <li>
                    <p>受託・提供等により取得した個人情報の利用目的</p>
                    <p>下記内容については、取引先様等からの受託業務や<br/>
                      人支援事業者等からの提供された個人情報で開示等の対象外です。</p>
                     <ol className='circled-list'>
                      <li>システム開発業務や運用・保守業務等受託業務の履行のため</li>
                      <li>協力会社技術者を当社の事業のシステム開発、運用保守等の履行に利用するため</li>
                      <li>求人等の支援サイトから取得する個人情報を採用の選考等に利用するため</li>
                    </ol> 
                </li>
              </ol>
            </dd>
          </div>

          <div className="privacy-definition-item">
            <dt>2.&nbsp;&nbsp;保有個人データ又は第三者提供記録に関する事項の周知等</dt>
            <dd>
              <p>
                当社が保有するご本人の個人情報について開示等<br/>
                （保有個人データの利用目的の通知、開示又は第三者提供記録の開示、内容の訂正、<br/>
                追加又は削除、利用の停止、消去及び第三者への提供の停止）の請求に応じます。<br/>
                開示等へのご請求につきましては、下記の「個人情報に関するお問い合わせ窓口」まで、ご連絡ください。<br/>
                「開示対象個人情報の開示等に関する請求書」（以下、「開示等申請書」という）を送付します。<br/>
                「開示等申請書」の内容をご確認頂き項目に従って記入しご返送下さい。<br/>
                ご請求の際には、ご本人又は代理人を証明する書類等のご提示を求めることがあります。<br/>
                開示等のご請求に対しては、当社から電話、又は、書面等で回答させて頂きます。<br/>
                開示等のご請求の際に、ご請求された方がご本人、または代理人であることを確認するための<br/>
                下記の書類をご提出して頂く場合があります。
              </p>
              <ol className="circled-list">
                <li>
                  <p>開示等をご請求される方がご本人の場合、次のいずれか1点の添付をお願いいたします。</p>
                  <ul>
                    <li>運転免許証、パスポート、マイナンバーカード（氏名と写真の表示がある面のみ）などの写し</li>
                    <li>健康保険証、年金手帳、住民票（3ヶ月以内、個人番号の記載がないもの）の写し</li>
                  </ul>
                </li>
                <li>
                  <p>開示等をご請求される方が代理人様の場合</p>
                  <ul>
                    <li>上記書類のいずれか１点とご本人による委任状を提出下さい</li>
                  </ul>
                </li>
              </ol>
            </dd>
          </div>

          <div className="privacy-definition-item">
            <dt>3.&nbsp;&nbsp;開示等をしない場合の取扱い</dt>
            <dd>
              <p>
                次に定める場合は、開示等の対応を致しかねますので、予めご了承願います。<br/>
                開示等をしないことを決定した場合は、その旨理由を付して通知申し上げます。  
              </p>
              <ol className="circled-list">
                <li>ご本人の確認ができない場合</li>
                <li>代理人によるご依頼に際して、代理権が確認できない場合</li>
                <li>所定の依頼書類に不備があった場合</li>
                <li>ご依頼のあった情報項目が、当社保有個人データ又は第三者提供記録に該当しない場合</li>
                <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                <li>他の法令に違反することとなる場合</li>
              </ol>
            </dd>
          </div>

          <div className="privacy-definition-item">
            <dt>4.&nbsp;&nbsp;安全管理措置</dt>
            <dd>
              <p>
                当社の保有個人データ及びお客様からお預かりする個人データの取扱いについては、<br/>
                安全管理措置として以下の対策を実施しています。
              </p>
              <ol>
                <li>
                  <p>個人情報の利用目的</p>
                  <ol className="circled-list">
                    <li>
                        <p>組織的安全管理措置</p>
                        <ul className="privacy-sublist">
                          <li>個人データの取扱いに関する責任者を設置するとともに、個人データを取り扱う従業者及び当該従業者が取扱う個人データの範囲を明確化し、緊急時等における報告連絡体制を整備</li>
                          <li>個人データの取扱状況について、定期的に自己点検を実施</li>
                        </ul>
                    </li>
                    <li>
                      <p>人的安全管理措置</p>
                      <ul className="privacy-sublist">
                        <li>個人データの取扱いに関する留意事項について、従業者に定期的な教育研修を実施</li>
                      </ul>
                    </li>
                    <li>
                      <p>物理的安全管理措置</p>
                      <ul className="privacy-sublist">
                        <li>個人データを取り扱う区域において、従業者の入退室管理及び業務に用いる機器等の制限を行うとともに、権限を有しない者による個人データの閲覧を防止する措置を実施</li>
                        <li>個人データについて業務終了後の速やかな返却又は廃棄、消去を実施</li>
                      </ul>
                    </li>
                    <li>
                      <p>技術的安全管理措置</p>
                      <ul className="privacy-sublist">
                        <li>アクセス制御を実施して、担当者及び取り扱う個人情報データベース等の範囲を限定</li>
                        <li>個人データを取り扱う情報システムを外部からの不正アクセスから保護する仕組みを導入</li>
                      </ul>
                    </li>
                  </ol>
                </li>
              </ol>
            </dd>
          </div>
        </dl>
        <hr/>
        <dl className="privacy-definition-item privacy-contact-box">
          <dt>個人情報に関するお問い合わせ・苦情等の窓口</dt>
          <dd>
            <div className="privacy-contact-row">
              <span>担当部署：</span>
              <p>管理部「お問い合わせ窓口」</p>
            </div>
            <div className="privacy-contact-row">
              <span>担当者：</span>
              <p>井上　賢治</p>
            </div>
            <div className="privacy-contact-row">
              <span>電　　話：</span>
              <p>
                03-5835-3771<br/>
                受付時間：月曜日～金曜日 9:00～18:00<br/>
                （祝祭日、年末年始および当社が定める休日を除きます）
              </p>
            </div>
            <div className="privacy-contact-row">
              <span>所 在 地：</span>
              <p>
                〒104-0044<br/>
                東京都中央区明石町8-1　聖路加タワー34F
              </p>
            </div>
          </dd>
        </dl>
        <dl className="privacy-definition-item privacy-certification-section">
          <dt>当社の所属する認定個人情報保護団体について</dt>
          <dd>
              <p>
                当社は、個人情報の保護に関する法律に基づく認定個人情報保護団体である「一般財団法人日本情報経済社会推進協会」の対象事業者となっております。<br/>
                同協会では、対象事業者の個人情報の取扱いに関する苦情の解決を受け付けております。
              </p>
              <div className="privacy-contact-box privacy-certification-contact">
                <div className="privacy-contact-row">
                  <span>連絡先：</span>
                  <p>
                    一般財団法人日本情報経済社会推進協会<br/>
                    認定個人情報保護団体事務局
                  </p>
                </div>
                <div className="privacy-contact-row">
                  <span>所在地：</span>
                  <p>
                    〒106-0032<br/>
                    東京都港区六本木一丁目9番9号　六本木ファーストビル
                  </p>
                </div>
                <div className="privacy-contact-row">
                  <span>電　話：</span>
                  <p>03-5860-7565 フリーダイヤル：0120-700-779</p>
                </div>
              </div>
          </dd>
        </dl>
        <p className="privacy-policy-signature">
          コスモコンサルティング　株式会社<br/>
          個人情報保護管理者　井上　賢治
        </p>
      </article>
    </Container>
  )
}

export default PersonalInfoHandlingContent
