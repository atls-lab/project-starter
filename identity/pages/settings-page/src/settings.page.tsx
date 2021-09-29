import React                  from 'react'
import { HashRouter }         from 'react-router-dom'
import { Switch }             from 'react-router-dom'
import { Route }              from 'react-router-dom'

import { Layout }             from '@atls-ui-proto/layout'
import { Column }             from '@atls-ui-proto/layout'
import { Row }                from '@atls-ui-proto/layout'
import { ProfileInformation } from '@identity/profile-information-fragment'
import { ProfileOidc }        from '@identity/profile-oidc-fragment'
import { ProfileSecurity }    from '@identity/profile-security-fragment'
import { ProfileSidebar }     from '@identity/profile-sidebar-fragment'

const SettingsPage = () => (
  <HashRouter>
    <Row height='100%' overflowY='scroll'>
      <Layout flexBasis={[280, 280, 328]} flexShrink={0} display={['none', 'flex']}>
        <ProfileSidebar />
      </Layout>
      <Layout flexGrow={1}>
        <Column px={[16, 32, 32, 64]}>
          <Layout flexBasis={32} />
          <Layout flexGrow={1}>
            <Switch>
              <Route exact path='/'>
                <ProfileInformation />
              </Route>
              <Route exact path='/security'>
                <ProfileSecurity />
              </Route>
              <Route exact path='/social-links'>
                <ProfileOidc />
              </Route>
            </Switch>
          </Layout>
          <Layout flexBasis={[32, 56]} />
        </Column>
      </Layout>
    </Row>
  </HashRouter>
)

export default SettingsPage
