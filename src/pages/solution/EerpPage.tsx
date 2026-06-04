import eerpImage from '../../assets/solution/e-ERP.png'
import SolutionImage from './SolutionImage'

function EerpPage() {
  return (
    <article className="solution-content">
      <p className="solution-intro-main">
        e-ERP
      </p>
      <p className="solution-intro-sub">
        Enterprise Resource Planning
      </p>
      <p className="solution-description">
        企業用 e-Enterprise ソリューションで、 APICS （アメリカ生産及び在庫管理協会）標準基盤をベースにした改良形<br/>
        システムであり、流通及び製造関連業に最適化されています。
      </p>
      <div className="solution-image-wrap">
        <SolutionImage src={eerpImage} alt="e-ERP SYSTEM" />
      </div>
    </article>
  )
}

export default EerpPage
