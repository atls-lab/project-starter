/* eslint-disable jsx-a11y/label-has-associated-control */

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

export const VerificationLink = () => (
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
        <Layout>
          <Text fontSize={14} lineHeight='24px' textAlign='center'>
            <FormattedMessage
              id='verification_link.we_send'
              defaultMessage='Мы отправили ссылку с подтверждением на почту, указанную вами при регистрации. Перейдите по ссылке из письма для активации учетной записи.'
            />
          </Text>
        </Layout>
        <Layout flexBasis={[40, 60, 80]} />
        <Layout justifyContent='center'>
          <Text fontSize={18} color='#A0A4B2'>
            <FormattedMessage
              id='verification_link.dont_get'
              defaultMessage='Не получили письмо?'
            />
          </Text>
        </Layout>
        <Layout flexBasis={10} />
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='email'>
              <FormattedMessage id='verification_link.email' defaultMessage='Email' />
            </label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='email'>
            {({ attributes }, value, onChange) => (
              <FormattedMessage
                id='verification_link.enter_email'
                defaultMessage='Введите адрес вашей почты'
              >
                {(msg) => (
                  <Input
                    id='email'
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
        <Layout flexBasis={32} pb='8px'>
          <FlowNodeMessages name='email'>
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
                onClick={() => onSubmit({ method: 'link' })}
              >
                <FormattedMessage
                  id='verification_link.send_again'
                  defaultMessage='Отправить ещё раз'
                />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
