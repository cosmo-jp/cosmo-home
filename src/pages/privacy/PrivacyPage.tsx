import { useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import PersonalInfoHandlingContent from './PersonalInfoHandlingContent'
import PrivacyPolicyContent from './PrivacyPolicyContent'
import '../../styles/PrivacyPage.css'

const privacyTabs = [
  {
    id: 'policy',
    label: '個人情報保護方針',
    content: <PrivacyPolicyContent />,
  },
  {
    id: 'handling',
    label: '個人情報の取扱について',
    content: <PersonalInfoHandlingContent />,
  },
]

function PrivacyPage() {
  const [selectedTabId, setSelectedTabId] = useState(privacyTabs[0].id)
  const selectedTab =
    privacyTabs.find((tab) => tab.id === selectedTabId) ?? privacyTabs[0]

  return (
    <main className="sub-page">
      <section className="sub-hero banner-message">
        <Container fluid>
          <h1>{selectedTab.label}</h1>
        </Container>
      </section>
      <section className="privacy-section">
        <Tabs
          activeKey={selectedTabId}
          className="privacy-tab-list"
          onSelect={(key) => {
            if (key) {
              setSelectedTabId(key)
            }
          }}
        >
          {privacyTabs.map((tab) => (
            <Tab eventKey={tab.id} key={tab.id} title={tab.label}>
              <Container className="privacy-content-container" fluid>
                {tab.content}
              </Container>
            </Tab>
          ))}
        </Tabs>
      </section>
    </main>
  )
}

export default PrivacyPage
