/* eslint-disable jsx-a11y/label-has-associated-control */

import { FlowNode }         from '@atlss/next-identity-integration'
import { FlowSubmit }       from '@atlss/next-identity-integration'
import { FlowNodeMessages } from '@atlss/next-identity-integration'
import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'
import { Column }           from '@atls-ui-proto/layout'
import { Row }              from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'

export const ProfileInformation = () => (
  <Column height='100%'>
    <Layout>
      <Text fontSize={28} fontWeigth={500}>
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
    <Layout>
      <Row flexDirection={['column', 'column', 'row']}>
        <Layout flexBasis={['auto', 'auto', 240]}>
          <FlowSubmit>
            {({ submitting, onSubmit }) => (
              <Button
                type='submit'
                rounding={6}
                disabled={submitting}
                onClick={() => onSubmit({ method: 'profile' })}
              >
                <FormattedMessage id='profile_information.save' defaultMessage='Сохранить' />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
      </Row>
    </Layout>
  </Column>
)
