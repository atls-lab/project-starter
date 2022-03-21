import { Text }             from '@atls-ui-proto/text'

import Link                 from 'next/link'
import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

export const RecoveryLink = () => {
  const { query } = useRouter()

  return (
    <Link href={query.return_to ? `/auth/recovery?return_to=${query.return_to}` : '/auth/recovery'}>
      <a href='/auth/recovery' style={{ textDecoration: 'none' }}>
        <Text fontSize={12} fontWeight={500}>
          <FormattedMessage id='login_password.forgot' defaultMessage='Забыли пароль?' />
        </Text>
      </a>
    </Link>
  )
}
