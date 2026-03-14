import { useState } from 'react'

export const useCartOverlay = () => {
  const [isOpen, setOpen] = useState(false)

  const open = () => setOpen(true)
  const close = () => setOpen(false)
  const toggle = () => setOpen(!isOpen)

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
