import React                          from 'react'
import { useRouter }                  from 'next/router'
import dynamic                        from 'next/dynamic'
import { KratosSettingsFlowProvider } from '@atls/react-kratos-browser-flows'

import { RecoveryPage }               from './recovery.page'

const SettingsPageDefault = dynamic({
  loader: () => import('./settings.page'),
  ssr: false,
})

const SettingsPage = (props) => {
  const { query } = useRouter()

  if (query.flow) {
    return <RecoveryPage />
  }

  return <SettingsPageDefault {...props} />
}

export default () => (
  <KratosSettingsFlowProvider>
    <SettingsPage />
  </KratosSettingsFlowProvider>
)
