import { KratosSettingsFlowProvider } from '@atls/react-kratos-browser-flows'

import React                          from 'react'
import { useRouter }                  from 'next/router'
import dynamic                        from 'next/dynamic'

import { RecoveryPage }               from './recovery.page'
import { RecoverySeo }                from './recovery.seo'
import { SettingsSeo }                from './settings.seo'

const SettingsPageDefault = dynamic({
  loader: () => import('./settings.page'),
  ssr: false,
})

const SettingsPage = (props) => {
  const { query } = useRouter()

  return (
    <KratosSettingsFlowProvider>
      {query?.flow && (
        <>
          <RecoverySeo />
          <RecoveryPage />
        </>
      )}
      {!query?.flow && (
        <>
          <SettingsSeo />
          <SettingsPageDefault {...props} />
        </>
      )}
    </KratosSettingsFlowProvider>
  )
}

export default SettingsPage
