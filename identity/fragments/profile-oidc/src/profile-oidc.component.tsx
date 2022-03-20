import { FlowNodesFilter }  from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { Button }           from '@atls-ui-proto/button'
import { Column }           from '@atls-ui-proto/layout'
import { Row }              from '@atls-ui-proto/layout'
import { Layout }           from '@atls-ui-proto/layout'
import { Text }             from '@atls-ui-proto/text'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

export const ProfileOidc = () => (
  <Column>
    <Layout>
      <Text fontSize={28} fontWeigth={500}>
        <FormattedMessage id='profile_oidc.social_networks' defaultMessage='Социальные сети' />
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout>
      <FlowNodesFilter
        predicate={(node) => node.group === 'oidc' && node.attributes.name === 'link'}
      >
        {(nodes) => (
          <Column>
            <Layout>
              <Text fontSize={16} fontWeigth={500}>
                <FormattedMessage
                  id='profile_oidc.unlink_social_networks'
                  defaultMessage='Привязать социальные сети'
                />
              </Text>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <FlowSubmit>
                {({ submitting, onSubmit }) => (
                  <Row>
                    {nodes.map(({ attributes }) => (
                      <Layout m='8px' key={attributes?.value}>
                        <Button
                          id={attributes?.name}
                          size='large'
                          shape='circle'
                          inverted
                          disabled={submitting}
                          onClick={() => {
                            onSubmit({ [attributes.name]: attributes.value, method: undefined })
                          }}
                        >
                          <Text fontSize={28} fontWeight={600} textTransform='uppercase'>
                            {String(attributes?.value).substr(0, 1)}
                          </Text>
                        </Button>
                      </Layout>
                    ))}
                  </Row>
                )}
              </FlowSubmit>
            </Layout>
            <Layout flexBasis={24} />
          </Column>
        )}
      </FlowNodesFilter>
    </Layout>
    <Layout>
      <FlowNodesFilter
        predicate={(node) => node.group === 'oidc' && node.attributes.name === 'unlink'}
      >
        {(nodes) => (
          <Column>
            <Layout>
              <Text fontSize={16} fontWeigth={500}>
                <FormattedMessage
                  id='profile_oidc.unlink_social_networks'
                  defaultMessage='Отвязать социальные сети'
                />
              </Text>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <FlowSubmit>
                {({ submitting, onSubmit }) => (
                  <Row>
                    {nodes.map(({ attributes }) => (
                      <Layout m='8px' key={attributes?.value}>
                        <Button
                          id={attributes?.name}
                          size='large'
                          shape='circle'
                          inverted
                          disabled={submitting}
                          onClick={() => {
                            onSubmit({ [attributes.name]: attributes.value, method: undefined })
                          }}
                        >
                          <Text fontSize={28} fontWeight={600} textTransform='uppercase'>
                            {String(attributes?.value).substr(0, 1)}
                          </Text>
                        </Button>
                      </Layout>
                    ))}
                  </Row>
                )}
              </FlowSubmit>
            </Layout>
            <Layout flexBasis={24} />
          </Column>
        )}
      </FlowNodesFilter>
    </Layout>
  </Column>
)
