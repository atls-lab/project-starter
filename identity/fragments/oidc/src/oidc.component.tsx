import React              from 'react'
import { Button }         from '@atls-ui-proto/button'
import { Column }         from '@atls-ui-proto/layout'
import { Row }            from '@atls-ui-proto/layout'
import { Layout }         from '@atls-ui-proto/layout'
import { Text }           from '@atls-ui-proto/text'
import { FlowNode }       from '@atls/react-kratos-browser-flows'
import { FlowNodesGroup } from '@atls/react-kratos-browser-flows'
import { FlowForm }       from '@atls/react-kratos-browser-flows'

export const Oidc = ({ title }) => (
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
          <FlowForm style={{ width: '100%' }}>
            <FlowNode name='csrf_token'>{({ attributes }) => <input {...attributes} />}</FlowNode>
            <FlowNodesGroup name='oidc'>
              {(providers) => (
                <Row justifyContent='center' flexWrap='wrap'>
                  {providers.map(({ attributes }) => (
                    <Layout m='8px' key={attributes?.value}>
                      {/* @ts-ignore */}
                      <Button
                        id={attributes?.name}
                        size='large'
                        shape='circle'
                        inverted
                        {...attributes}
                      >
                        <Text fontSize={28} fontWeight={600} textTransform='uppercase'>
                          {String(attributes?.value).substr(0, 1)}
                        </Text>
                      </Button>
                    </Layout>
                  ))}
                </Row>
              )}
            </FlowNodesGroup>
          </FlowForm>
        </Layout>
        <Layout flexBasis={10} />
      </Column>
    </Layout>
  </Column>
)
