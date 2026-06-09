import axios from 'axios'

export type ContactRequestBody = {
  lastName: string
  firstName: string
  email: string
  companyName: string
  department: string
  phone: string
  message: string
  privacyConsent: boolean
}

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact'

export function submitContact(body: ContactRequestBody) {
  return axios.post(CONTACT_API_URL, body)
}
