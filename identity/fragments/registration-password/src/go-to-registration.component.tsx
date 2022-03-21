/* eslint-disable jsx-a11y/anchor-is-valid */

import { Text }             from '@atls-ui-proto/text'
import { Space }            from '@atls-ui-proto/text'

import Link                 from 'next/link'
import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

export const GoToRegistration = () => {
  const { query } = useRouter()

  return (
    <div>
      <Text fontSize={12} color='#A0A4B2' fontWeight={500}>
        <FormattedMessage id='registration_password.no_account' defaultMessage='Нет аккаунта?' />
      </Text>
      <Space />
      <Link
        href={
          query.return_to ? `/auth/registration?return_to=${query.return_to}` : '/auth/registration'
        }
      >
        <a style={{ textDecoration: 'none' }}>
          <Text fontSize={12} fontWeight={500}>
            <FormattedMessage
              id='registration_password.register'
              defaultMessage='Зарегистрироваться'
            />
          </Text>
        </a>
      </Link>
    </div>
  )
}
