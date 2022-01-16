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
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='traits.email'>Email</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='traits.email'>
            {({ attributes }, value, onChange) => (
              <Input id='traits.email' {...attributes} value={value} onChange={onChange} />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={24} pb='8px'>
          <FlowNodeMessages name='traits.email'>
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
            {({ attributes }, value, onChange) => (
              <Input id='password' {...attributes} value={value} onChange={onChange} />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={24} pb='8px'>
          <FlowNodeMessages name='password'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='traits.name.first'>Фамилия</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='traits.name.first'>
            {({ attributes }, value, onChange) => (
              <Input id='traits.name.first' {...attributes} value={value} onChange={onChange} />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={24} pb='8px'>
          <FlowNodeMessages name='traits.name.first'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <Text fontWeight={600} fontSize={12}>
            <label htmlFor='traits.name.last'>Имя</label>
          </Text>
        </Layout>
        <Layout mt='8px'>
          <FlowNode name='traits.name.last'>
            {({ attributes }, value, onChange) => (
              <Input id='traits.name.last' {...attributes} value={value} onChange={onChange} />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={32} pb='8px'>
          <FlowNodeMessages name='traits.name.last'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Layout>
        <Layout>
          <FlowSubmit method='password'>
            <Button type='submit' size='large' fill>
              Создать аккаунт
            </Button>
          </FlowSubmit>
        </Layout>
      </Column>
    </Layout>
  </Column>
)
