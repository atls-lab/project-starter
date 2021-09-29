import React                       from 'react'

import { KratosLoginFlowProvider } from '@atls/react-kratos-browser-flows'
import { GoToRegistration }        from '@identity/registration-password-fragment'
import { LoginPassword }           from '@identity/login-password-fragment'
import { AuthLayout }              from '@identity/auth-layout-fragment'
import { Column }                  from '@atls-ui-proto/layout'
import { Oidc }                    from '@identity/oidc-fragment'

export const LoginPage = () => (
  <KratosLoginFlowProvider>
    <AuthLayout actions={<GoToRegistration />} title='Вход'>
      <Column>
        <LoginPassword />
        <Oidc title='или войдите используя социальные сети' />
      </Column>
    </AuthLayout>
  </KratosLoginFlowProvider>
)
