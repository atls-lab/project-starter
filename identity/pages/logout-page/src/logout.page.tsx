import { LogoutFlow } from '@atls/next-identity-integration'

import React          from 'react'

import { AuthLayout } from '@identity/auth-layout-fragment'

export const LogoutPage = () => (
  <LogoutFlow>
    <AuthLayout title='Выход' />
  </LogoutFlow>
)
