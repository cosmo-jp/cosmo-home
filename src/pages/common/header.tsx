import { useEffect, useState } from 'react'
import { Accordion, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
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
    to: '/solution',
    children: [
      { label: '관리 시스템', to: '/solution' },
      { label: '데이터 연동', to: '/solution' },
      { label: '운영 자동화', to: '/solution' },
    ],
  },
  {
    label: '서비스',
    to: '/service',
    children: [
      { label: '웹 화면 개발', to: '/service' },
      { label: '기능 개선', to: '/service' },
      { label: '품질 확인', to: '/service' },
    ],
  },
  {
    label: '상담문의',
    to: '/contact',
    children: [],
  },
]

function Header() {
  const location = useLocation()
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const activeMenu = navItems.find(
    (item) =>
      item.children.length > 0 &&
      (item.to === location.pathname ||
        item.children.some((child) => child.to === location.pathname)),
  )

  useEffect(() => {
    setHoveredMenu(null)
  }, [location.pathname])

  return (
    <header className="site-header-wrap">
      <Navbar className="site-header" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} className="site-logo" to="/">
            <span className="site-logo-mark">C</span>
            <span className="site-logo-text">
              <strong>Cosmo</strong>
              <small>HOME</small>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-navbar-nav" />
          <Navbar.Collapse id="site-navbar-nav">
            <Nav className="site-nav site-nav-desktop ms-auto">
              {navItems.map((item) => (
                <div
                  className="site-nav-item"
                  key={item.label}
                  onMouseEnter={() => setHoveredMenu(item.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {item.to ? (
                    <Nav.Link
                      as={NavLink}
                      className="site-nav-link"
                      to={item.to}
                    >
                      {item.label}
                    </Nav.Link>
                  ) : (
                    <button
                      className={`site-nav-link site-nav-button ${
                        hoveredMenu === item.label ? 'active' : ''
                      }`}
                      type="button"
                    >
                      {item.label}
                    </button>
                  )}
                  {item.children.length > 0 && (
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
              ))}
            </Nav>

            <div className="site-mobile-menu">
              <Accordion
                defaultActiveKey={activeMenu?.to ?? activeMenu?.label}
                flush
              >
                {navItems.map((item) =>
                  item.children.length > 0 ? (
                    <Accordion.Item eventKey={item.to ?? item.label} key={item.label}>
                      <Accordion.Header>{item.label}</Accordion.Header>
                      <Accordion.Body>
                        <ul className="slide-menu-links">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link to={child.to}>
                                <h2>{child.label}</h2>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ) : (
                    <NavLink
                      className="mobile-menu-contact"
                      key={item.label}
                      to={item.to ?? '/'}
                    >
                      {item.label}
                    </NavLink>
                  ),
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
