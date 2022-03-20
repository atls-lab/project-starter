import { FlowMessages }       from '@atls/next-identity-integration'
import { Layout }             from '@atls-ui-proto/layout'
import { Column }             from '@atls-ui-proto/layout'
import { Row }                from '@atls-ui-proto/layout'

import React                  from 'react'
import { HashRouter }         from 'react-router-dom'

import { GeneralMessages }    from '@identity/messages-fragment'
import { ProfileInformation } from '@identity/profile-information-fragment'
import { ProfileOidc }        from '@identity/profile-oidc-fragment'
import { ProfileSecurity }    from '@identity/profile-security-fragment'
import { ProfileSidebar }     from '@identity/profile-sidebar-fragment'

const SettingsPage = () => (
  <HashRouter>
    <Row height='100%'>
      <Layout flexBasis={[280, 280, 328]} flexShrink={0} display={['none', 'flex']}>
        <ProfileSidebar />
      </Layout>
      <Layout flexGrow={1}>
        <Column px={[16, 32, 32, 64]} height='100%' overflowY='scroll'>
          <Layout pt={34}>
            <FlowMessages>
              {(messages) => (
                <Layout>
                  <GeneralMessages messages={messages} />
                </Layout>
              )}
            </FlowMessages>
          </Layout>
          <Layout pb={64}>
            <ProfileInformation />
          </Layout>
          <Layout pb={64}>
            <ProfileSecurity />
          </Layout>
          <Layout>
            <ProfileOidc />
          </Layout>
          <Layout flexBasis={[32, 56]} />
        </Column>
      </Layout>
    </Row>
  </HashRouter>
)

export default SettingsPage
