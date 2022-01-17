import { Button }           from '@atls-ui-proto/button'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowError }        from '@atls/react-kratos-browser-flows'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

export const Error = () => (
  <Column justifyContent='center' alignItems='center'>
    <Layout maxWidth={448} width='100%'>
      <FlowError>
        {(error) => (
          <Column alignItems='center'>
            <Layout>
              <Text fontSize={48} color='#A0A4B2' textAlign='center'>
                {error?.status}
              </Text>
            </Layout>
            <Layout flexBasis={20} />
            <Layout>
              <Text fontSize={14} lineHeight='24px' textAlign='center'>
                {error?.message}
              </Text>
            </Layout>
            <Layout flexBasis='8px' />
            <Layout>
              <Text fontSize={14} lineHeight='24px' textAlign='center'>
                {error?.reason}
              </Text>
            </Layout>
          </Column>
        )}
      </FlowError>
    </Layout>
    <Layout flexBasis={70} />
    <Layout>
      {/* @ts-ignore */}
      <Button as='a' href='/auth/login' size='large' style={{ textDecoration: 'none' }}>
        <FormattedMessage id='error.to_login_page' defaultMessage='На страницу авторизации' />
      </Button>
    </Layout>
  </Column>
)
