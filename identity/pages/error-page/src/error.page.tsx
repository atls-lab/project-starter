import { ErrorFlow }  from '@atls/next-identity-integration'

import React          from 'react'

import { AuthLayout } from '@identity/auth-layout-fragment'
import { Error }      from '@identity/error-fragment'

export const ErrorPage = () => (
  <ErrorFlow>
    <AuthLayout>
      <Error />
    </AuthLayout>
  </ErrorFlow>
)
