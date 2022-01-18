import { Column }                  from '@atls-ui-proto/layout'
import { KratosLoginFlowProvider } from '@atls/react-kratos-browser-flows'

import React                       from 'react'

import { AuthLayout }              from '@identity/auth-layout-fragment'
import { LoginPassword }           from '@identity/login-password-fragment'
import { Oidc }                    from '@identity/oidc-fragment'
import { GoToRegistration }        from '@identity/registration-password-fragment'

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
