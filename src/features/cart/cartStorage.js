export const loadCart = () => {
  try {
    const raw = localStorage.getItem('cart')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export const saveCart = (items) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items))
  } catch {
    console.error('Failed to save cart')
  }
}
