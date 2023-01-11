import { Button }         from '@atls-ui-proto/button'
import { Column }         from '@atls-ui-proto/layout'
import { Row }            from '@atls-ui-proto/layout'
import { Layout }         from '@atls-ui-proto/layout'
import { Text }           from '@atls-ui-proto/text'
import { FlowNodesGroup } from '@atls/next-identity-integration'
import { FlowSubmit }     from '@atls/next-identity-integration'

import React              from 'react'

export const Oidc = ({ title }) => (
  <FlowNodesGroup name='oidc'>
    {(providers) => (
      <Column justifyContent='center' alignItems='center'>
        <Layout maxWidth={320} width='100%'>
          <Column>
            <Layout flexBasis={[40, 60]} />
            <Layout justifyContent='center'>
              <Text fontSize={14} color='#A0A4B2' textAlign='center'>
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <FlowSubmit>
                {({ submitting, onSubmit }) => (
                  <Row justifyContent='center' flexWrap='wrap'>
                    {providers
                      .filter(({ attributes }) => attributes.name === 'provider')
                      .map(({ attributes }) => (
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
            <Layout flexBasis={10} />
          </Column>
        </Layout>
      </Column>
    )}
  </FlowNodesGroup>
)
