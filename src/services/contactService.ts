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

type ContactErrorResponse = {
  message?: string
}

export class ContactServiceError extends Error {
  status?: number

  constructor(message: string, status?: number, cause?: unknown) {
    super(message, { cause })
    this.name = 'ContactServiceError'
    this.status = status
  }
}

export async function submitContact(body: ContactRequestBody) {
  try {
    return await axios.post(CONTACT_API_URL, body)
  } catch (error: unknown) {
    if (axios.isAxiosError<ContactErrorResponse>(error)) {
      if (error.response) {
        throw new ContactServiceError(
          error.response.data?.message ??
            'お問い合わせの送信に失敗しました。',
          error.response.status,
          error,
        )
      }

      if (error.request) {
        throw new ContactServiceError(
          'サーバーから応答がありません。しばらくしてから再度お試しください。',
          undefined,
          error,
        )
      }
    }

    throw new ContactServiceError(
      'お問い合わせの送信中に予期しないエラーが発生しました。',
      undefined,
      error,
    )
  }
}
