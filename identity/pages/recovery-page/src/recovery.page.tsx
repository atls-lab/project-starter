import { Column }                     from '@atls-ui-proto/layout'
import { KratosRecoveryFlowProvider } from '@atls/react-kratos-browser-flows'

import React                          from 'react'

import { AuthLayout }                 from '@identity/auth-layout-fragment'
import { GoToLoginRecovery }          from '@identity/recovery-link-fragment'
import { RecoveryLink }               from '@identity/recovery-link-fragment'

export const RecoveryPage = () => (
  <KratosRecoveryFlowProvider>
    <AuthLayout actions={<GoToLoginRecovery />} title='Восстановление пароля'>
      <Column>
        <RecoveryLink />
      </Column>
    </AuthLayout>
  </KratosRecoveryFlowProvider>
)
