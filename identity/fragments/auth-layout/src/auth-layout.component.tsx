import React               from 'react'
import { FC }              from 'react'

import { SidebarLayout }   from './sidebar-layout.component'
import { AuthLayoutProps } from './layout.interfaces'

export const AuthLayout: FC<AuthLayoutProps> = ({ type, ...props }) => {
  if (type === 'sidebar') {
    return <SidebarLayout {...props} />
  }

  return <SidebarLayout {...props} />
}
