import React                        from 'react'

import { Error }                    from '@identity/error-fragment'
import { AuthLayout }               from '@identity/auth-layout-fragment'
import { KratosErrorsFlowProvider } from '@atls/react-kratos-browser-flows'

export const ErrorPage = () => (
  <KratosErrorsFlowProvider>
    <AuthLayout>
      <Error />
    </AuthLayout>
  </KratosErrorsFlowProvider>
)
