import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pmarkImage from '../../assets/security/Pmark85_JP.gif'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-container">
        <div className="site-footer-text">
          <p className="site-footer-company">スモコンサルティング株式会社</p>
          <div className="site-footer-bottom">
            <p className="site-footer-copyright">
              Copyright 2007 Cosmo Consulting Inc, All Rights Reserved
            </p>
            <nav className="site-footer-menu" aria-label="Footer navigation">
              <Link to="/company/overview">회사개요</Link>
              <span>|</span>
              <span>솔루션</span>
              <span>|</span>
              <span>서비스</span>
              <span>|</span>
              <Link to="/privacy">個人情報保護方針</Link>
            </nav>
          </div>
        </div>
        <a
          className="site-footer-mark-link"
          href="https://privacymark.jp/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="site-footer-mark" src={pmarkImage} alt="Pマーク" />
        </a>
      </Container>
    </footer>
  )
}

export default Footer
