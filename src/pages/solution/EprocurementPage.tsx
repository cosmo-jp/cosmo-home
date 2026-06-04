import eprocurementImage from '../../assets/solution/e-Procurement.png'
import SolutionImage from './SolutionImage'

function EprocurementPage() {
  return (
    <article className="solution-content">
      <p className="solution-intro-main">
          e-Procurement SYSTEM
      </p>
      <p className="solution-description">
        e-ProcurementSystemは Web基盤の母企業協業化システムで、インターネット上で調達業務が出来ます。<br/>
        これにより調達費用を節減し、ERPとの連係により購買リードタイム短縮を実現して業務生産性を極大化出来ます。<br/>
        e-ProcurementSystemは Bidding部門と e-Purchasing部門を独立的に運営することが出来ます。<br/>
        この機能により顧客の管理水準と目的に合致する運用が出来ます。<br/>
      </p>
      <div className="solution-image-wrap">
        <SolutionImage src={eprocurementImage} alt="e-Procurement SYSTEM" />
      </div>
    </article>
  )
}

export default EprocurementPage
