import React             from 'react'
import { ThemeProvider } from '@atls-ui-proto/theme'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider>
    <Component {...pageProps} {...props} />
  </ThemeProvider>
)

export default App
