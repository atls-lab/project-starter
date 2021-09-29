import React                   from 'react'
import { ApiAuthUserProvider } from '@atls/react-api-auth-user'

import { IndexPage }           from '@site/index-page'

const Page = () => (
  <ApiAuthUserProvider>
    <IndexPage />
  </ApiAuthUserProvider>
)

export default Page
