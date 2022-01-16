import { Text }  from '@atls-ui-proto/text'
import { Space } from '@atls-ui-proto/text'

import React     from 'react'
import { FormattedMessage } from 'react-intl'

export const GoToLogin = () => (
  <div>
    <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
      <FormattedMessage id='login_password.already_have' defaultMessage='Уже есть аккаунт?' />
    </Text>
    <Space />
    <a href='/auth/login' style={{ textDecoration: 'none' }}>
      <Text fontSize={12} fontWeight={500}>
        <FormattedMessage id='login_password.log_in' defaultMessage='Войти' />
      </Text>
    </a>
  </div>
)
