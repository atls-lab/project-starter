import { FlowMessages }       from '@atls/next-identity-integration'
import { SettingsFlow }       from '@atls/next-identity-integration'
import { Layout }             from '@atls-ui-proto/layout'
import { Column }             from '@atls-ui-proto/layout'

import React                  from 'react'

import { GeneralMessages }    from '@identity/messages-fragment'
import { ProfileInformation } from '@identity/profile-information-fragment'
import { ProfileLayout }      from '@identity/profile-layout-fragment'
import { ProfileOidc }        from '@identity/profile-oidc-fragment'
import { ProfileSecurity }    from '@identity/profile-security-fragment'

export const SettingsPage = () => (
  <SettingsFlow>
    <ProfileLayout>
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
    </ProfileLayout>
  </SettingsFlow>
)
