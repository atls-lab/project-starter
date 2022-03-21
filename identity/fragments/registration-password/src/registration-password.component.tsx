import { FlowNode }         from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { FlowMessages }     from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

export const RegistrationPassword = () => (
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
          <FlowNode name='traits.email'>
            {({ attributes }, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage id='registration_password.email' defaultMessage='Email' />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input id='traits.email' {...attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={24} pb='8px'>
                  <FlowNodeMessages name='traits.email'>
                    {(messages) => <FieldMessages messages={messages} />}
                  </FlowNodeMessages>
                </Layout>
              </Column>
            )}
          </FlowNode>
        </Layout>
        <Layout>
          <FlowNode name='password'>
            {({ attributes }, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage id='registration_password.password' defaultMessage='Пароль' />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input id='password' {...attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={24} pb='8px'>
                  <FlowNodeMessages name='password'>
                    {(messages) => <FieldMessages messages={messages} />}
                  </FlowNodeMessages>
                </Layout>
              </Column>
            )}
          </FlowNode>
        </Layout>
        <Layout>
          <FlowNode name='traits.name.first'>
            {({ attributes }, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage id='registration_password.first_name' defaultMessage='Имя' />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input id='traits.name.first' {...attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={24} pb='8px'>
                  <FlowNodeMessages name='traits.name.first'>
                    {(messages) => <FieldMessages messages={messages} />}
                  </FlowNodeMessages>
                </Layout>
              </Column>
            )}
          </FlowNode>
        </Layout>
        <Layout>
          <FlowNode name='traits.name.last'>
            {({ attributes }, value, onChange) => (
              <Column>
                <Layout>
                  <Text fontWeight={600} fontSize={12}>
                    <FormattedMessage
                      id='registration_password.last_name'
                      defaultMessage='Фамилия'
                    />
                  </Text>
                </Layout>
                <Layout mt='8px'>
                  <Input id='traits.name.last' {...attributes} value={value} onChange={onChange} />
                </Layout>
                <Layout flexBasis={32} pb='8px'>
                  <FlowNodeMessages name='traits.name.last'>
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
              <Button fill size='large' disabled={submitting} onClick={() => onSubmit()}>
                <FormattedMessage
                  id='registration_password.create_account'
                  defaultMessage='Создать аккаунт'
                />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
