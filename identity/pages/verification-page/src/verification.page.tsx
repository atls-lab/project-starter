import { Column }                         from '@atls-ui-proto/layout'
import { KratosVerificationFlowProvider } from '@atls/react-kratos-browser-flows'

import React                              from 'react'

import { AuthLayout }                     from '@identity/auth-layout-fragment'
import { GoToLogin }                      from '@identity/login-password-fragment'
import { VerificationLink }               from '@identity/verification-link-fragment'

export const VerificationPage = () => (
  <KratosVerificationFlowProvider>
    <AuthLayout actions={<GoToLogin />} title='Верификация'>
      <Column>
        <VerificationLink />
      </Column>
    </AuthLayout>
  </KratosVerificationFlowProvider>
)
