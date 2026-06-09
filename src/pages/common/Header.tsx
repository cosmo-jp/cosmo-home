import { useEffect, useState } from 'react'
import { Accordion, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../../styles/HeaderSubmenu.css'

type NavItem = {
  id: string
  labelKey: string
  to?: string
  children?: {
    id: string
    labelKey: string
    to: string
  }[]
}

const navItems: NavItem[] = [
  {
    id: 'about',
    labelKey: 'nav.about',
    children: [
      { id: 'message', labelKey: 'nav.message', to: '/company/message' },
      { id: 'overview', labelKey: 'nav.overview', to: '/company/overview' },
      { id: 'location', labelKey: 'nav.location', to: '/company/location' },
    ],
  },
  {
    id: 'solution',
    labelKey: 'nav.solution',
    children: [
      { id: 'e-erp', labelKey: 'e-ERP', to: '/solution/e-erp' },
      { id: 'e-scm', labelKey: 'e-SCM', to: '/solution/e-scm' },
      {
        id: 'e-procurement',
        labelKey: 'e-Procurement',
        to: '/solution/e-procurement',
      },
      {
        id: 'e-marketplace',
        labelKey: 'e-MarketPlace',
        to: '/solution/e-marketplace',
      },
      {
        id: 'e-shoppingmall-wizard',
        labelKey: 'e-shoppingMallWizard',
        to: '/solution/e-shoppingmall-wizard',
      },
      {
        id: 'e-homepage-wizard',
        labelKey: 'e-HomePageWizard',
        to: '/solution/e-homepage-wizard',
      },
    ],
  },
  {
    id: 'recruit',
    labelKey: 'nav.recruit',
    to: '/recruit',
  },
  {
    id: 'contact',
    labelKey: 'nav.contact',
    to: '/contact',
    children: [],
  },
]

const languageOptions = [
  { code: 'ja', flag: '🇯🇵', labelKey: 'language.ja' },
  { code: 'ko', flag: '🇰🇷', labelKey: 'language.ko' },
]

function Header() {
  const location = useLocation()
  const { i18n, t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const currentLanguage =
    languageOptions.find((language) => language.code === i18n.language) ??
    languageOptions[0]

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setHoveredMenu(null)
  }, [location.pathname])

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
  }

  const languageDropdown = (
    <Dropdown align="end" className="language-dropdown">
      <Dropdown.Toggle
        aria-label={t('common.language')}
        className="language-dropdown-toggle"
        variant="light"
      >
        <span aria-hidden="true">{currentLanguage.flag}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languageOptions.map((language) => (
          <Dropdown.Item
            active={i18n.language === language.code}
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span aria-hidden="true">{language.flag}</span>
            <span>{t(language.labelKey)}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )

  return (
    <header className="site-header-wrap">
      <Navbar
        className="site-header"
        expand="lg"
        expanded={isMobileMenuOpen}
        onToggle={(expanded) => setIsMobileMenuOpen(expanded)}
      >
        <Container fluid>
          <Navbar.Brand
            as={NavLink}
            className="site-logo"
            onClick={() => setIsMobileMenuOpen(false)}
            to="/"
          >
            <span className="site-logo-mark">C</span>
            <span className="site-logo-text">
              <strong>Cosmo</strong>
              <small>HOME</small>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-navbar-nav" />
          <Navbar.Collapse id="site-navbar-nav">
            <Nav className="site-nav site-nav-desktop ms-auto">
              {navItems.map((item) =>
                item.to ? (
                  <Nav.Link
                    as={NavLink}
                    className="site-nav-link"
                    key={item.id}
                    onClick={() => setIsMobileMenuOpen(false)}
                    to={item.to}
                  >
                    {t(item.labelKey)}
                  </Nav.Link>
                ) : (
                  <div
                    className="site-nav-item"
                    key={item.id}
                    onMouseEnter={() => setHoveredMenu(item.id)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <button
                      className={`site-nav-link site-nav-button ${
                        hoveredMenu === item.id ? 'active' : ''
                      }`}
                      type="button"
                    >
                      {t(item.labelKey)}
                    </button>
                    {item.children && item.children.length > 0 && (
                      <div
                        className={`hover-submenu hover-submenu-${item.id} ${
                          hoveredMenu === item.id ? 'open' : ''
                        }`}
                      >
                        <ul className="submenu-link-list">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <h3>
                                <NavLink
                                  onClick={() => setHoveredMenu(null)}
                                  to={child.to}
                                >
                                  {child.labelKey.startsWith('nav.')
                                    ? t(child.labelKey)
                                    : child.labelKey}
                                </NavLink>
                              </h3>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ),
              )}
              {languageDropdown}
            </Nav>

            <div className="site-mobile-menu">
              <Accordion flush>
                {navItems.map((item) =>
                  item.children && item.children.length > 0 ? (
                    <Accordion.Item eventKey={item.id} key={item.id}>
                      <Accordion.Header>{t(item.labelKey)}</Accordion.Header>
                      <Accordion.Body>
                        <ul className="slide-menu-links">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to={child.to}
                              >
                                <h2>
                                  {child.labelKey.startsWith('nav.')
                                    ? t(child.labelKey)
                                    : child.labelKey}
                                </h2>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ) : item.to ? (
                    <NavLink
                      className="mobile-menu-contact"
                      key={item.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      to={item.to}
                    >
                      {t(item.labelKey)}
                    </NavLink>
                  ) : null,
                )}
              </Accordion>
              <div className="mobile-language-dropdown">{languageDropdown}</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
