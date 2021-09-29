import React                  from 'react'
import { FC }                 from 'react'
import { Text }               from '@atls-ui-proto/text'
import { Column }             from '@atls-ui-proto/layout'
import { Layout }             from '@atls-ui-proto/layout'

import { FieldMessagesProps } from './messages.interfaces'

export const FieldMessages: FC<FieldMessagesProps> = ({ messages = [] }) => (
  <Column>
    {messages.map((message) => (
      <Layout key={message?.text}>
        <Text
          key={message?.id}
          color={message?.type === 'error' ? '#E41508' : 'black'}
          lineHeight='24px'
        >
          {message?.text}
        </Text>
      </Layout>
    ))}
  </Column>
)
