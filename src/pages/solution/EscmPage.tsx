import escmImage from '../../assets/solution/e-SCM.png'
import SolutionImage from './SolutionImage'

function EscmPage() {
  return (
    <article className="solution-content">
      <p className="solution-intro-main">
        e-SCM
      </p>
      <p className="solution-intro-sub">
        Supply Chain Management
      </p>
      <p className="solution-description">
        SCMの一番基本的な思想の情報を適時に提供してその情報を SCMに参加するすべての取り引き担当者らが共有するのと<br/>
        供給網全体の担当者らが共同に計画して実践することで SCMの效果と利益はすべての部分で得られることができます。<br/>
        SCMは再考減少、業務手続きの簡素化、業務処理の時間短縮などの效果を得ることができます。
      </p>
      <div className="solution-image-wrap">
        <SolutionImage src={escmImage} alt="e-SCM SYSTEM" />
      </div>
    </article>
  )
}

export default EscmPage
