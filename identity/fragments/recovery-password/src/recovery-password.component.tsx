/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowNode }         from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { FlowMessages }     from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

export const RecoveryPassword = () => (
  <Column justifyContent='center' alignItems='center'>
    <Layout maxWidth={320} width='100%'>
      <Column>
        <FlowMessages>
          {(messages) => (
            <Layout>
              <GeneralMessages messages={messages} />
            </Layout>
          )}
        </FlowMessages>
        <Layout flexBasis={20} />
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='password'>
              <FormattedMessage id='recovery_password.new_password' defaultMessage='Новый пароль' />
            </label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='password'>
            {({ attributes }, value, onChange) => (
              <FormattedMessage
                id='recovery_password.come_up'
                defaultMessage='Придумайте новый пароль'
              >
                {(msg) => (
                  <Input
                    placeholder={String(msg)}
                    {...attributes}
                    value={value}
                    onChange={onChange}
                  />
                )}
              </FormattedMessage>
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={40} pb='8px'>
          <FlowNodeMessages name='password'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
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
                <FormattedMessage id='recovery_password.confirm' defaultMessage='Подтвердить' />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
