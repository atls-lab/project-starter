import { Column }                         from '@atls-ui-proto/layout'
import { KratosRegistrationFlowProvider } from '@atls/react-kratos-browser-flows'

import React                              from 'react'

import { AuthLayout }                     from '@identity/auth-layout-fragment'
import { GoToLogin }                      from '@identity/login-password-fragment'
import { Oidc }                           from '@identity/oidc-fragment'
import { RegistrationPassword }           from '@identity/registration-password-fragment'

export const RegistrationPage = () => (
  <KratosRegistrationFlowProvider>
    <AuthLayout actions={<GoToLogin />} title='Регистрация'>
      <Column>
        <RegistrationPassword />
        <Oidc title='Зарегистрируйтесь с помощью соцсетей.' />
      </Column>
    </AuthLayout>
  </KratosRegistrationFlowProvider>
)
