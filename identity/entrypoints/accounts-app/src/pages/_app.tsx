import { ThemeProvider } from '@atls-ui-proto/theme'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider>
    <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
      <Component {...pageProps} {...props} />
    </IntlProvider>
  </ThemeProvider>
)

export default App
