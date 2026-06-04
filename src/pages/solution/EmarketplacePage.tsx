import emarketplaceImage from '../../assets/solution/e-MarketPlace.png'
import SolutionImage from './SolutionImage'

function EmarketplacePage() {
  return (
    <article className="solution-content">
      <p className="solution-intro-main">
          e-MarketPlace
      </p>
      <p className="solution-description">
        e-MarketPlaceSystemは Web基盤の公開購買システムで、インターネット上で簡単に調達業務が出来ます。<br/>
        また、合理的な購買価額で企業の調達費用を節減し、全社的資源管理(ERP)システムとの連係により<br/>
        購買リードタイムの短縮を実現し、業務生産性を極大化するように支援します。
      </p>
      <div className="solution-image-wrap">
        <SolutionImage src={emarketplaceImage} alt="e-MarketPlace SYSTEM" />
      </div>
    </article>
  )
}

export default EmarketplacePage
