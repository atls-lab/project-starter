import { Text }             from '@atls-ui-proto/text'
import { Space }            from '@atls-ui-proto/text'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

export const GoToRegistration = () => (
  <div>
    <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
      <FormattedMessage id='registration_password.no_account' defaultMessage='Нет аккаунта?' />
    </Text>
    <Space />
    <a href='/auth/registration' style={{ textDecoration: 'none' }}>
      <Text fontSize={12} fontWeight={500}>
        <FormattedMessage id='registration_password.register' defaultMessage='Зарегистрироваться' />
      </Text>
    </a>
  </div>
)
