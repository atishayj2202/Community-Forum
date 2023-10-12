export function saveUser(uid) {
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 100)

  document.cookie =
    encodeURIComponent('uid') +
    '=' +
    encodeURIComponent(uid) +
    '; expires=' +
    expirationDate.toUTCString() +
    '; path=/'
}

export function authUser() {
  const cookies = document.cookie.split('; ')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=')
    if (cookie[0] === 'uid') {
      return { status: true, uid: decodeURIComponent(cookie[1]).toString() }
    }
  }
  return { status: false }
}

export function deleteUser() {
  document.cookie = 'uid' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
