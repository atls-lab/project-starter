import { Text }             from '@atls-ui-proto/text'
import { Space }            from '@atls-ui-proto/text'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

export const GoToLoginRecovery = () => (
  <div>
    <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
      <FormattedMessage id='recovery_link.forgot_password' defaultMessage='Вспомнили пароль?' />
    </Text>
    <Space />
    <a href='/auth/login' style={{ textDecoration: 'none' }}>
      <Text fontSize={12} fontWeight={500}>
        <FormattedMessage id='recovery_link.enter' defaultMessage='Войти' />
      </Text>
    </a>
  </div>
)
