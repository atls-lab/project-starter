import React                from 'react'

import { RecoveryPassword } from '@identity/recovery-password-fragment'
import { AuthLayout }       from '@identity/auth-layout-fragment'
import { Column }           from '@atls-ui-proto/layout'

export const RecoveryPage = () => (
  <AuthLayout title='Сброс пароля'>
    <Column>
      <RecoveryPassword />
    </Column>
  </AuthLayout>
)
