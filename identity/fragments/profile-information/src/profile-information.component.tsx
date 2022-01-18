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
import { FormattedMessage } from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'
import { GeneralMessages }  from '@identity/messages-fragment'

export const ProfileInformation = () => (
  <Column height='100%'>
    <FlowMessages>
      {(messages) => (
        <Layout>
          <GeneralMessages messages={messages} />
        </Layout>
      )}
    </FlowMessages>
    <Layout>
      <Text fontSize={24} fontWeigth={500}>
        <FormattedMessage
          id='profile_information.personal_information'
          defaultMessage='Личная информация'
        />
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout>
      <Row maxWidth={['none', 'none', 520]} flexDirection={['column', 'column', 'row']}>
        <Layout flexBasis={['100%', '100%', '50%']}>
          <Column>
            <Layout>
              <Text fontWeight={600} fontSize={12}>
                <label htmlFor='traits.name.first'>
                  <FormattedMessage id='profile_information.name' defaultMessage='Имя' />
                </label>
              </Text>
            </Layout>
            <Layout flexBasis={10} />
            <Layout>
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
          </Column>
        </Layout>
        <Layout flexBasis={[0, 0, 40]} flexShrink={0} />
        <Layout flexBasis={['100%', '100%', '50%']}>
          <Column>
            <Layout>
              <Text fontWeight={600} fontSize={12}>
                <label htmlFor='traits.name.last'>
                  <FormattedMessage id='profile_information.lastname' defaultMessage='Фамилия' />
                </label>
              </Text>
            </Layout>
            <Layout flexBasis={10} />
            <Layout>
              <FlowNode name='traits.name.last'>
                {({ attributes }, value, onChange) => (
                  <Input id='traits.name.last' {...attributes} value={value} onChange={onChange} />
                )}
              </FlowNode>
            </Layout>
            <Layout flexBasis={24} pb='8px'>
              <FlowNodeMessages name='traits.name.last'>
                {(messages) => <FieldMessages messages={messages} />}
              </FlowNodeMessages>
            </Layout>
          </Column>
        </Layout>
      </Row>
    </Layout>
    <Layout>
      <Row maxWidth={['none', 'none', 520]} flexDirection={['column', 'column', 'row']}>
        <Layout flexBasis={['100%', '100%', '50%']}>
          <Column>
            <Layout>
              <Text fontWeight={600} fontSize={12}>
                <label htmlFor='traits.email'>
                  <FormattedMessage id='profile_information.email' defaultMessage='E-mail' />
                </label>
              </Text>
            </Layout>
            <Layout flexBasis={10} />
            <Layout>
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
          </Column>
        </Layout>
        <Layout flexBasis={[0, 0, 40]} flexShrink={0} />
        <Layout flexBasis={[0, 0, '50%']} />
      </Row>
    </Layout>
    <Layout flexBasis={40} flexGrow={1} />
    <Layout>
      <Row flexDirection={['column', 'column', 'row']}>
        <Layout flexBasis={['auto', 'auto', 240]}>
          <FlowSubmit method='profile'>
            <Button type='submit' size='large' rounding={6} fill>
              <FormattedMessage id='profile_information.save' defaultMessage='Сохранить' />
            </Button>
          </FlowSubmit>
        </Layout>
        <Layout flexBasis={[24, 24, 40]} />
        <Layout>
          <Button size='large' rounding={6} inverted fill>
            <FormattedMessage id='profile_information.reset' defaultMessage='Сбросить' />
          </Button>
        </Layout>
      </Row>
    </Layout>
  </Column>
)
