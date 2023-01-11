import { Column }           from '@atls-ui-proto/layout'
import { VerificationFlow } from '@atls/next-identity-integration'

import React                from 'react'

import { AuthLayout }       from '@identity/auth-layout-fragment'
import { GoToLogin }        from '@identity/login-password-fragment'
import { VerificationLink } from '@identity/verification-link-fragment'

export const VerificationPage = () => (
  <VerificationFlow>
    <AuthLayout actions={<GoToLogin />} title='Верификация'>
      <Column>
        <VerificationLink />
      </Column>
    </AuthLayout>
  </VerificationFlow>
)
