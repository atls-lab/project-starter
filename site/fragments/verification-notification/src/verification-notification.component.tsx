import { Box }          from '@atls-ui-proto/layout'
import { Text }         from '@atls-ui-proto/text'
import { Space }        from '@atls-ui-proto/text'
import { IdentityLink } from '@atls/react-identity-links'
import { WithUser }     from '@atls/react-user'

import React            from 'react'

export const VerificationNotification = () => (
  <WithUser>
    {(user) => {
      if (!user?.identity?.verifiable_addresses?.some((address) => address.verified === false)) {
        return null
      }

      return (
        <Box
          height={36}
          width='100%'
          background='black'
          alignItems='center'
          justifyContent='center'
        >
          <Text color='white' fontSize={12}>
            Ваш email адрес не верифицирован, следуйте инструкциям, высланным в сообщении или
            <Space />
            <IdentityLink type='verification'>
              {(url) => (
                <a href={url} style={{ color: 'white' }}>
                  <Text color='white' fontSize={12} fontWeight={600}>
                    повторите отправку
                  </Text>
                </a>
              )}
            </IdentityLink>
          </Text>
        </Box>
      )
    }}
  </WithUser>
)
