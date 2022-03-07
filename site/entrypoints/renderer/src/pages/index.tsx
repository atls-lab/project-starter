import { IdentityBrowserUserProvider } from '@atls/react-identity-user-provider'

import React                           from 'react'

import { IndexPage }                   from '@site/index-page'

const Page = () => (
  <IdentityBrowserUserProvider>
    <IndexPage />
  </IdentityBrowserUserProvider>
)

export default Page
