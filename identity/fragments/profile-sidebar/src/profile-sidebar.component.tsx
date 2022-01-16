import { Column }          from '@atls-ui-proto/layout'
import { Layout }          from '@atls-ui-proto/layout'
import { Box }             from '@atls-ui-proto/layout'
import { LogoPlaceholder } from '@atls-ui-proto/placeholder'
import { Text }            from '@atls-ui-proto/text'

import React               from 'react'
import { Link }            from 'react-router-dom'

import { Route }     from 'react-router-dom'

const SidebarLink = ({ href, icon, children, exact }: any) => (
  <Route path={href} exact={exact}>
    {({ match }) => (
      <Link to={href} style={{ textDecoration: 'none', width: '100%' }}>
        <Box
          p='16px 16px 16px 64px'
          position='relative'
          height={48}
          width='100%'
          bg={match ? '#F3F4F8' : 'transparent'}
          borderRadius={12}
          cursor='pointer'
        >
          <Box position='absolute' width={64} minHeight='100%' alignItems='center' left={0} top={0}>
            {icon}
          </Box>
          <Text fontSize={14} color={match ? 'black' : '#606570'} fontWeight={match ? 500 : 400}>
            {children}
          </Text>
        </Box>
      </Link>
    )}
  </Route>
)

export const ProfileSidebar = () => (
  <Column px={[24, 24, 40]}>
    <Layout flexBasis={32} />
    <Layout pl={15}>
      <LogoPlaceholder>Project Starter</LogoPlaceholder>
    </Layout>
    <Layout flexBasis={60} />
    <Layout>
      <SidebarLink href='/' exact>
        Профиль
      </SidebarLink>
    </Layout>
    <Layout flexBasis='8px' />
    <Layout>
      <SidebarLink href='/security'>Безопасность</SidebarLink>
    </Layout>
    <Layout flexBasis='8px' />
    <Layout>
      <SidebarLink href='/social-links'>Привязка соц. сетей</SidebarLink>
    </Layout>
  </Column>
)
