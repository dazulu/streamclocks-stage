import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const URL = process.env.NEXT_PUBLIC_REDIRECT_DOMAIN!
    window.location.replace(URL)
  })

  return null
}
