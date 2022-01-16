/* eslint-disable jsx-a11y/label-has-associated-control */

import { Column } from '@atls-ui-proto/layout'
import { Layout } from '@atls-ui-proto/layout'
import { Text }   from '@atls-ui-proto/text'

import React      from 'react'

export const ProfileOidc = () => (
  <Column height='100%'>
    <Layout>
      <Text fontSize={24} fontWeigth={500}>
        Привязка соц. сетей
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout flexBasis={40} flexGrow={1} />
  </Column>
)
