import { useState } from 'react'

const KEY = 'theme'

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

const readStored = () => {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

// Follows the system setting until the visitor picks one; the pick is remembered.
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => readStored() || (systemDark() ? 'dark' : 'light'))
  const next = theme === 'dark' ? 'light' : 'dark'

  const toggle = () => {
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // storage blocked: the switch still applies for this visit
    }
    setTheme(next)
  }

  return (
    <button type='button' className='toggle' onClick={toggle} aria-label={`Switch to ${next} mode`}>
      {next === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle
