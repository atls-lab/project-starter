import React                from 'react'
import { UserProvider }     from '@atls/react-user'
import { getKratosSession } from '@atls/kratos-session'

import { PromoPage }        from '@site/promo-page'

const Page = ({ session }) => (
  <UserProvider value={session}>
    <PromoPage />
  </UserProvider>
)

export const getServerSideProps = async ({ req }) => {
  const session = await getKratosSession(req)

  return { props: { session } }
}

export default Page
