import { ThemeProvider } from '@atls-ui-proto/theme'

import Cookies           from 'js-cookie'
import React             from 'react'
import { IntlProvider }  from 'react-intl'
import { useRouter }     from 'next/router'
import { useEffect }     from 'react'

import ru                from '../../locales/ru.json'

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
      <IntlProvider locale='ru' defaultLocale='ru' messages={ru}>
        <Component {...pageProps} {...props} />
      </IntlProvider>
    </ThemeProvider>
  )
}

export default App
