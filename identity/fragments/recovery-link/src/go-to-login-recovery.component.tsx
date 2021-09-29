import React     from 'react'
import { Text }  from '@atls-ui-proto/text'
import { Space } from '@atls-ui-proto/text'

export const GoToLoginRecovery = () => (
  <div>
    <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
      Вспомнили пароль?
    </Text>
    <Space />
    <a href='/auth/login' style={{ textDecoration: 'none' }}>
      <Text fontSize={12} fontWeight={500}>
        Войти
      </Text>
    </a>
  </div>
)
