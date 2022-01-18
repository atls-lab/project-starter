import { Column }           from '@atls-ui-proto/layout'

import React                from 'react'

import { AuthLayout }       from '@identity/auth-layout-fragment'
import { RecoveryPassword } from '@identity/recovery-password-fragment'

export const RecoveryPage = () => (
  <AuthLayout title='Сброс пароля'>
    <Column>
      <RecoveryPassword />
    </Column>
  </AuthLayout>
)
