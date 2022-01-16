import { Text }  from '@atls-ui-proto/text'
import { Space } from '@atls-ui-proto/text'

import React     from 'react'

export const GoToRegistration = () => (
  <div>
    <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
      Нет аккаунта?
    </Text>
    <Space />
    <a href='/auth/registration' style={{ textDecoration: 'none' }}>
      <Text fontSize={12} fontWeight={500}>
        Зарегистрироваться
      </Text>
    </a>
  </div>
)
