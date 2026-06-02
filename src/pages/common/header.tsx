import { useEffect, useState } from 'react'
import { Accordion, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'

type NavItem = {
  label: string
  to?: string
  children?: {
    label: string
    to: string
  }[]
}

const navItems: NavItem[] = [
  {
    label: '회사소개',
    children: [
      { label: '메세지', to: '/company/message' },
      { label: '회사개요', to: '/company/overview' },
      { label: '오시는길', to: '/company/location' },
    ],
  },
  {
    label: '솔루션',
    children: [
      { label: 'e-ERP', to: '/solution/e-erp' },
      { label: 'e-SCM', to: '/solution/e-scm' },
      { label: 'e-Procurement', to: '/solution/e-procurement' },
      { label: 'e-MarketPlace', to: '/solution/e-marketplace' },
    ],
  },
  {
    label: '서비스',
  },
  {
    label: '상담문의',
    to: '/contact',
    children: [],
  },
]

function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setHoveredMenu(null)
  }, [location.pathname])

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
                    key={item.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                    to={item.to}
                  >
                    {item.label}
                  </Nav.Link>
                ) : (
                  <div
                    className="site-nav-item"
                    key={item.label}
                    onMouseEnter={() => setHoveredMenu(item.label)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <button
                      className={`site-nav-link site-nav-button ${
                        hoveredMenu === item.label ? 'active' : ''
                      }`}
                      type="button"
                    >
                      {item.label}
                    </button>
                    {item.children && item.children.length > 0 && (
                      <div
                        className={`hover-submenu ${
                          hoveredMenu === item.label ? 'open' : ''
                        }`}
                      >
                        <ul className="submenu-link-list">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <h3>
                                <NavLink
                                  onClick={() => setHoveredMenu(null)}
                                  to={child.to}
                                >
                                  {child.label}
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
            </Nav>

            <div className="site-mobile-menu">
              <Accordion flush>
                {navItems.map((item) =>
                  item.children && item.children.length > 0 ? (
                    <Accordion.Item eventKey={item.label} key={item.label}>
                      <Accordion.Header>{item.label}</Accordion.Header>
                      <Accordion.Body>
                        <ul className="slide-menu-links">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to={child.to}
                              >
                                <h2>{child.label}</h2>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ) : item.to ? (
                    <NavLink
                      className="mobile-menu-contact"
                      key={item.label}
                      onClick={() => setIsMobileMenuOpen(false)}
                      to={item.to}
                    >
                      {item.label}
                    </NavLink>
                  ) : null,
                )}
              </Accordion>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
