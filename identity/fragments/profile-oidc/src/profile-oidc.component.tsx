import { Column } from '@atls-ui-proto/layout'
import { Layout } from '@atls-ui-proto/layout'
import { Text }   from '@atls-ui-proto/text'

import React      from 'react'
import { FormattedMessage } from 'react-intl'

export const ProfileOidc = () => (
  <Column height='100%'>
    <Layout>
      <Text fontSize={24} fontWeigth={500}>
        <FormattedMessage id='profile_oidc.social_networks' defaultMessage='Привязка соц. сетей' />
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout flexBasis={40} flexGrow={1} />
  </Column>
)
