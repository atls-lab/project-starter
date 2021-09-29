/* eslint-disable jsx-a11y/label-has-associated-control */

import React                from 'react'
import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowNode }         from '@atls/react-kratos-browser-flows'
import { FlowSubmit }       from '@atls/react-kratos-browser-flows'
import { FlowMessages }     from '@atls/react-kratos-browser-flows'
import { FlowNodeMessages } from '@atls/react-kratos-browser-flows'

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
            Мы отправили ссылку с подтверждением на почту, указанную вами при регистрации. Перейдите
            по ссылке из письма для активации учетной записи.
          </Text>
        </Layout>
        <Layout flexBasis={[40, 60, 80]} />
        <Layout justifyContent='center'>
          <Text fontSize={18} color='#A0A4B2'>
            Не получили письмо?
          </Text>
        </Layout>
        <Layout flexBasis={10} />
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='email'>Email</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='email'>
            {({ attributes }, value, onChange) => (
              <Input
                id='email'
                placeholder='Введите адрес вашей почты'
                {...attributes}
                value={value}
                onChange={onChange}
              />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={32} pb='8px'>
          <FlowNodeMessages name='email'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <FlowSubmit method='link'>
            <Button type='submit' size='large' fill>
              Отправить еще раз
            </Button>
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
