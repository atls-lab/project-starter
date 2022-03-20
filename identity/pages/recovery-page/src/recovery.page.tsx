import { RecoveryFlow }      from '@atls/next-identity-integration'
import { Column }            from '@atls-ui-proto/layout'

import React                 from 'react'

import { AuthLayout }        from '@identity/auth-layout-fragment'
import { GoToLoginRecovery } from '@identity/recovery-link-fragment'
import { RecoveryLink }      from '@identity/recovery-link-fragment'

export const RecoveryPage = () => (
  <RecoveryFlow>
    <AuthLayout actions={<GoToLoginRecovery />} title='Восстановление пароля'>
      <Column>
        <RecoveryLink />
      </Column>
    </AuthLayout>
  </RecoveryFlow>
)
