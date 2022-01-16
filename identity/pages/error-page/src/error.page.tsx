import { KratosErrorsFlowProvider } from '@atls/react-kratos-browser-flows'

import React                        from 'react'

import { AuthLayout }               from '@identity/auth-layout-fragment'
import { Error }                    from '@identity/error-fragment'

export const ErrorPage = () => (
  <KratosErrorsFlowProvider>
    <AuthLayout>
      <Error />
    </AuthLayout>
  </KratosErrorsFlowProvider>
)
