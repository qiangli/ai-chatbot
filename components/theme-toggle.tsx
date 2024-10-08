'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import Cookies from 'js-cookie'

import { Button } from '@/components/ui/button'
import { IconMoon, IconSun } from '@/components/ui/icons'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()

  React.useEffect(() => {
    const storedTheme = Cookies.get('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [setTheme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          const newTheme = theme === 'light' ? 'dark' : 'light'
          setTheme(newTheme)
          Cookies.set('theme', newTheme, {
            expires: 365 * 100,
            path: '/',
            domain: '.openaide.localhost'
          })
        })
      }}
    >
      {!theme ? null : theme === 'dark' ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
