import { useState, type FormEvent } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { submitContact, type ContactRequestBody } from '../../services/contactService'
import '../../styles/ContactPage.css'

type ContactFieldName = Exclude<keyof ContactRequestBody, 'privacyConsent'>

const contactItems: Array<{ label: string; name: ContactFieldName }> = [
  { label: 'お名前（姓）', name: 'lastName' },
  { label: 'お名前（名）', name: 'firstName' },
  { label: 'メールアドレス', name: 'email' },
  { label: '会社名', name: 'companyName' },
  { label: '担当部署', name: 'department' },
  { label: '電話', name: 'phone' },
  { label: 'メッセージ本文', name: 'message' },
]

function ContactPage() {
  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<ContactFieldName, string>>
  >({})
  const [showConsentWarning, setShowConsentWarning] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const body: ContactRequestBody = {
      lastName: String(formData.get('lastName') ?? '').trim(),
      firstName: String(formData.get('firstName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      companyName: String(formData.get('companyName') ?? '').trim(),
      department: String(formData.get('department') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      message: String(formData.get('message') ?? ''),
      privacyConsent: formData.get('privacyConsent') === 'on',
    }

    const nextErrors = contactItems.reduce<
      Partial<Record<ContactFieldName, string>>
    >((errors, item) => {
      if (!body[item.name]) {
        errors[item.name] = '入力してください。'
      }

      return errors
    }, {})

    setValidationErrors(nextErrors)
    setShowConsentWarning(!body.privacyConsent)

    if (Object.keys(nextErrors).length > 0 || !body.privacyConsent) {
      return
    }

    await submitContact(body)
  }

  return (
    <main className="sub-page">
      <section className="sub-hero banner-message contact-banner">
        <Container fluid>
          <h1>お問い合わせ</h1>
        </Container>
      </section>

      <section className="contact-section">
        <form noValidate onSubmit={handleSubmit}>
          <Container className="contact-container" fluid>
            <p className="page-title">
              お問い合わせ
            </p>
            <dl className="contact-list">
              {contactItems.map((item) => (
                <div className="contact-row" key={item.name}>
                  <dt>
                    <span>{item.label}</span>
                    <span className="contact-required">必須</span>
                  </dt>
                  <dd>
                    {item.name === 'message' ? (
                      <textarea
                        className="contact-input contact-textarea"
                        name={item.name}
                        onChange={() => {
                          setValidationErrors((currentErrors) => ({
                            ...currentErrors,
                            [item.name]: undefined,
                          }))
                        }}
                        aria-invalid={Boolean(validationErrors[item.name])}
                      />
                    ) : (
                      <input
                        className="contact-input"
                        name={item.name}
                        onChange={() => {
                          setValidationErrors((currentErrors) => ({
                            ...currentErrors,
                            [item.name]: undefined,
                          }))
                        }}
                        aria-invalid={Boolean(validationErrors[item.name])}
                        type="text"
                      />
                    )}
                    {validationErrors[item.name] && (
                      <p className="contact-error" role="alert">
                        {validationErrors[item.name]}
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
          <Container className="contact-container submit-container" fluid>
            <p>
              ご入力いただきました情報は、当社の「
              <Link className="contact-privacy-link" to="/privacy">
                個人情報保護方針
              </Link>
              」に準じ、お取り扱いいたします。
            </p>
            <p>
              <label className="contact-consent">
                <input
                  name="privacyConsent"
                  onChange={() => {
                    setShowConsentWarning(false)
                  }}
                  type="checkbox"
                />
                <span>同意する</span>
              </label>
            </p>
            {showConsentWarning && (
              <div className="contact-warning-page" role="alert">
                個人情報保護方針に同意してください。
              </div>
            )}
            <button className="contact-submit" type="submit">送信する</button>
          </Container>
        </form>
      </section>
    </main>
  )
}

export default ContactPage
