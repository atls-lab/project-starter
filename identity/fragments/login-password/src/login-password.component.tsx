import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { FlowMessages }     from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { FlowNode }         from '@atls/next-identity-integration'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

import { RecoveryLink }     from './recovery-link.component'

export const LoginPassword = () => (
  <Column justifyContent='center' alignItems='center'>
    <FlowMessages>
      {(messages) => (
        <Layout>
          <GeneralMessages messages={messages} />
        </Layout>
      )}
    </FlowMessages>
    <Layout maxWidth={320} width='100%'>
      <Column>
        <Layout>
          <FlowNode name='identifier'>
            {(field, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage id='login_password.email' defaultMessage='Email' />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input {...field.attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={24} pb='8px'>
                  <FlowNodeMessages name='password_identifier'>
                    {(messages) => <FieldMessages messages={messages} />}
                  </FlowNodeMessages>
                </Layout>
              </Column>
            )}
          </FlowNode>
        </Layout>
        <Layout>
          <FlowNode name='password'>
            {(field, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage id='login_password.password' defaultMessage='Пароль' />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input {...field.attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={32} pb='8px'>
                  <FlowNodeMessages name='password'>
                    {(messages) => <FieldMessages messages={messages} />}
                  </FlowNodeMessages>
                </Layout>
              </Column>
            )}
          </FlowNode>
        </Layout>
        <Layout>
          <FlowSubmit>
            {({ submitting, onSubmit }) => (
              <Button
                type='submit'
                size='large'
                fill
                disabled={submitting}
                onClick={() => onSubmit({ method: 'password' })}
              >
                <FormattedMessage id='login_password.enter' defaultMessage='Войти' />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
        <Layout flexBasis={20} />
        <Layout justifyContent='flex-end'>
          <RecoveryLink />
        </Layout>
      </Column>
    </Layout>
  </Column>
)
