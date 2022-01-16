import Cookies       from 'js-cookie'
import React         from 'react'
import { useEffect } from 'react'

export const IndexPage = () => {
  useEffect(() => {
    const returnTo = Cookies.get('returnTo')

    if (returnTo) {
      Cookies.remove('returnTo')

      window.location.href = returnTo
    } else {
      // TODO: check for auth
      window.location.href = '/profile/settings'
    }
  })

  return <div />
}
