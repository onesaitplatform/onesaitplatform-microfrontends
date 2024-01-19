const storage = (config: string): Storage => {
  return config === 'localStorage' ? localStorage : sessionStorage
}

const getCookie = (name: string): string | undefined => {
  const value: string = `; ${document.cookie}`
  const parts: string[] = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift()
    return cookieValue
  }
  return undefined
}

export {
  storage,
  getCookie
}