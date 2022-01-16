/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Row }              from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'
import { FlowNode }         from '@atls/react-kratos-browser-flows'
import { FlowSubmit }       from '@atls/react-kratos-browser-flows'
import { FlowMessages }     from '@atls/react-kratos-browser-flows'
import { FlowNodeMessages } from '@atls/react-kratos-browser-flows'

import React                from 'react'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

export const ProfileSecurity = () => (
  <Column height='100%' maxWidth={['none', 'none', 520]}>
    <FlowMessages>
      {(messages) => (
        <Layout>
          <GeneralMessages messages={messages} />
        </Layout>
      )}
    </FlowMessages>
    <Layout>
      <Text fontSize={24} fontWeigth={500}>
        Безопасность
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout>
      <Text fontWeight={600} fontSize={12}>
        <label htmlFor='password'>Пароль</label>
      </Text>
    </Layout>
    <Layout flexBasis={10} />
    <Layout>
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
    <Layout flexBasis={40} flexGrow={1} />
    <Layout>
      <Row flexDirection={['column', 'column', 'row']}>
        <Layout flexBasis={['auto', 'auto', 240]}>
          <FlowSubmit method='password'>
            <Button type='submit' size='large' rounding={6} fill>
              Сохранить
            </Button>
          </FlowSubmit>
        </Layout>
        <Layout flexBasis={[24, 24, 40]} />
        <Layout>
          <Button size='large' rounding={6} inverted fill>
            Сбросить
          </Button>
        </Layout>
      </Row>
    </Layout>
  </Column>
)
