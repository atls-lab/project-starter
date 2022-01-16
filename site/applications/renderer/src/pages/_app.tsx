import { ThemeProvider } from '@atls-ui-proto/theme'

import React             from 'react'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider>
    <Component {...pageProps} {...props} />
  </ThemeProvider>
)

export default App
