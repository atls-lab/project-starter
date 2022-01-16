/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowNode }         from '@atls/react-kratos-browser-flows'
import { FlowSubmit }       from '@atls/react-kratos-browser-flows'
import { FlowMessages }     from '@atls/react-kratos-browser-flows'
import { FlowNodeMessages } from '@atls/react-kratos-browser-flows'

import React                from 'react'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

export const RecoveryLink = () => (
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
        <Layout pb='8px'>
          <FlowNodeMessages name='email'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <Text>Введите email указанный при регистрации</Text>
        </Layout>
        <Layout flexBasis={40} />
        <Layout>
          <FlowSubmit method='link'>
            <Button type='submit' size='large' fill>
              Сбросить пароль
            </Button>
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
