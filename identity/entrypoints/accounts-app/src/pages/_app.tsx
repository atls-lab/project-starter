import React             from 'react'
import { useEffect }     from 'react'
import { useRouter }     from 'next/router'
import { ThemeProvider } from '@atls-ui-proto/theme'
import Cookies           from 'js-cookie'

const useReturnTo = () => {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && router.query.return_to) {
      Cookies.set('returnTo', router.query.return_to)

      router.push(router.pathname, router.pathname, { shallow: true })
    }
  }, [router])
}

const App = ({ Component, pageProps, ...props }) => {
  useReturnTo()

  return (
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  )
}

export default App
