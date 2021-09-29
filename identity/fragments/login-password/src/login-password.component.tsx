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
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='password_identifier'>Email</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='password_identifier'>
            {(field, value, onChange) => (
              <Input
                id='password_identifier'
                {...field.attributes}
                value={value}
                onChange={onChange}
              />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={24} pb='8px'>
          <FlowNodeMessages name='password_identifier'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='password'>Пароль</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='password'>
            {(field, value, onChange) => (
              <Input id='password' {...field.attributes} value={value} onChange={onChange} />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={32} pb='8px'>
          <FlowNodeMessages name='password'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <FlowSubmit method='password'>
            <Button type='submit' size='large' fill>
              Войти
            </Button>
          </FlowSubmit>
        </Layout>
        <Layout flexBasis={20} />
        <Layout justifyContent='flex-end'>
          <a href='/auth/recovery' style={{ textDecoration: 'none' }}>
            <Text fontSize={12} fontWeight={500}>
              Забыли пароль?
            </Text>
          </a>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
