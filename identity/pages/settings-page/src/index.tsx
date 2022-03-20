import { SettingsFlow } from '@atls/next-identity-integration'

import React            from 'react'
import dynamic          from 'next/dynamic'

import { SettingsSeo }  from './settings.seo'

const SettingsPageDefault = dynamic({
  loader: () => import('./settings.page'),
  ssr: false,
})

const SettingsPage = (props) => (
  <SettingsFlow>
    <SettingsSeo />
    <SettingsPageDefault {...props} />
  </SettingsFlow>
)

export default SettingsPage
