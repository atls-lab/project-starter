import React                              from 'react'
import { KratosVerificationFlowProvider } from '@atls/react-kratos-browser-flows'

import { VerificationLink }               from '@identity/verification-link-fragment'
import { GoToLogin }                      from '@identity/login-password-fragment'
import { AuthLayout }                     from '@identity/auth-layout-fragment'
import { Column }                         from '@atls-ui-proto/layout'

export const VerificationPage = () => (
  <KratosVerificationFlowProvider>
    <AuthLayout actions={<GoToLogin />} title='Верификация'>
      <Column>
        <VerificationLink />
      </Column>
    </AuthLayout>
  </KratosVerificationFlowProvider>
)
