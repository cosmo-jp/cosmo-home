import homePageImage from '../../assets/solution/solution_hp_ltp.png'

function EhomePageWizardPage() {
  return (
    <article className="solution-content">
      <p className="solution-intro-main">
        e-HomePageWizard
      </p>
      <p className="solution-intro-sub">
        Home Page Wizard
      </p>
      <div className="shoppingmall-content">
        <div className="shoppingmall-copy">
          <p className="shoppingmall-lead">
            <span>ｅ－ＨｏｍｅＰａｇｅＷｉｚａｒｄ</span>は
          </p>
          <p>
            次世代型のホームページ製作方式エディットです。
            <br />
            従来型の規則的で固定化された枠組みだけで作成されたものを企画から提案、作成、
            <br />
            立上げまでの一連の作業をオーダーメード形式で多様なプラットフォームを提供し、
            <br />
            使用方法が簡単・便利であることを追求した、より質の高いホームページを
            <br />
            安価に構築するための作成ツールです。
          </p>
          <section className="shoppingmall-point">
            <h3>ポイント</h3>
            <ul>
              <li>HTML、Javaと言った開発言語を知らなくても利用可能</li>
              <li>多様なフォームの提供</li>
              <li>多様なサンプルの提供</li>
              <li>多様なオープン型システム（NT、Linux、UNIX等）への具現化の容易性</li>
              <li>制作方法の簡素化</li>
              <li>維持、補修の利便性向上</li>
            </ul>
          </section>
        </div>
        <img
          className="shoppingmall-cart-image"
          src={homePageImage}
          alt="ホームページ"
        />
      </div>
    </article>
  )
}

export default EhomePageWizardPage
