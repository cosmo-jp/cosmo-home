import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import EerpPage from './EerpPage'
import EmarketplacePage from './EmarketplacePage'
import EprocurementPage from './EprocurementPage'
import EscmPage from './EscmPage'
import '../../styles/SolutionPage.css'

type SolutionTab = {
  id: string
  label: string
  path: string
  content: ReactNode
}

const solutionTabs: SolutionTab[] = [
  {
    id: 'e-erp',
    label: 'e-ERP',
    path: '/solution/e-erp',
    content: <EerpPage />,
  },
  {
    id: 'e-scm',
    label: 'e-SCM',
    path: '/solution/e-scm',
    content: <EscmPage />,
  },
  {
    id: 'e-procurement',
    label: 'e-Procurement',
    path: '/solution/e-procurement',
    content: <EprocurementPage />,
  },
  {
    id: 'e-marketplace',
    label: 'e-MarketPlace',
    path: '/solution/e-marketplace',
    content: <EmarketplacePage />,
  },
]

function SolutionPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentTab =
    solutionTabs.find((tab) => tab.path === location.pathname) ??
    solutionTabs[0]
  const [selectedTabId, setSelectedTabId] = useState(currentTab.id)

  useEffect(() => {
    setSelectedTabId(currentTab.id)
  }, [currentTab.id])

  const selectedTab =
    solutionTabs.find((tab) => tab.id === selectedTabId) ?? solutionTabs[0]

  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>{selectedTab.label}</h1>
        </Container>
      </section>
      <section className="solution-section">
        <Tabs
          activeKey={selectedTabId}
          className="solution-tab-list"
          onSelect={(key) => {
            const nextTab = solutionTabs.find((tab) => tab.id === key)

            if (nextTab) {
              setSelectedTabId(nextTab.id)
              navigate(nextTab.path)
            }
          }}
        >
          {solutionTabs.map((tab) => (
            <Tab eventKey={tab.id} key={tab.id} title={tab.label}>
              <Container className="solution-content-container" fluid>
                {tab.content}
              </Container>
            </Tab>
          ))}
        </Tabs>
      </section>
    </main>
  )
}

export default SolutionPage
