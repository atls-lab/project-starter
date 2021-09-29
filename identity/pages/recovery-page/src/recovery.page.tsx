import React                          from 'react'

import { KratosRecoveryFlowProvider } from '@atls/react-kratos-browser-flows'
import { GoToLoginRecovery }          from '@identity/recovery-link-fragment'
import { RecoveryLink }               from '@identity/recovery-link-fragment'
import { AuthLayout }                 from '@identity/auth-layout-fragment'
import { Column }                     from '@atls-ui-proto/layout'

export const RecoveryPage = () => (
  <KratosRecoveryFlowProvider>
    <AuthLayout actions={<GoToLoginRecovery />} title='Восстановление пароля'>
      <Column>
        <RecoveryLink />
      </Column>
    </AuthLayout>
  </KratosRecoveryFlowProvider>
)
