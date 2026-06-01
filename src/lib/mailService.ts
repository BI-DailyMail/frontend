import { MOCK_MAILS } from './mockData'

export async function fetchMails() {
  return MOCK_MAILS
}

export async function fetchProblematicMails() {
  return MOCK_MAILS.filter(
    m => m.security_level === 'danger' || m.security_level === 'warn' || m.is_dark
  )
}
