import React                    from 'react'
import { FC }                   from 'react'
import { Text }                 from '@atls-ui-proto/text'
import { Layout }               from '@atls-ui-proto/layout'
import { Column }               from '@atls-ui-proto/layout'

import { GeneralMessagesProps } from './messages.interfaces'

export const GeneralMessages: FC<GeneralMessagesProps> = ({ messages = [] }) => (
  <Column justifyContent='center' alignItems='center'>
    {messages.map((message) => (
      <Layout maxWidth={320} width='100%' justifyContent='center' key={message?.id}>
        <Text
          color={message?.type === 'error' ? '#E41508' : 'black'}
          fontSize={14}
          lineHeight='24px'
          textAlign='center'
        >
          {message?.text}
        </Text>
      </Layout>
    ))}
    <Layout flexBasis={24} />
  </Column>
)
