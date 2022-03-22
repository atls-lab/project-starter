import { Button }          from '@atls-ui-proto/button'
import { Box }             from '@atls-ui-proto/layout'
import { Layout }          from '@atls-ui-proto/layout'
import { Row }             from '@atls-ui-proto/layout'
import { LogoPlaceholder } from '@atls-ui-proto/placeholder'
import { Text }            from '@atls-ui-proto/text'
import { Space }           from '@atls-ui-proto/text'
import { IdentityLink }    from '@atls/react-identity-links'
import { WithUser }        from '@atls/react-user'
import { WithoutUser }     from '@atls/react-user'

import React               from 'react'

export const Navigation = () => (
  <Box
    height={72}
    width='100%'
    background='#ffffff'
    boxShadow='0px 10px 50px rgba(80, 89, 99, 0.15)'
  >
    <Row alignItems='center'>
      <Layout flexGrow={1} ml={[24, 32, 48]}>
        <LogoPlaceholder>Project Starter</LogoPlaceholder>
      </Layout>
      <WithUser>
        {(user) => (
          <>
            <Layout mr={32} display={['none', 'flex', 'flex']}>
              <Text fontSize={14}>
                Вы вошли как, <Space />{' '}
                <IdentityLink type='settings'>
                  {(url) => (
                    <a href={url} style={{ textDecoration: 'none' }}>
                      <Text fontSize={14} fontWeight={600}>
                        {user.identity?.traits?.email}
                      </Text>
                    </a>
                  )}
                </IdentityLink>
              </Text>
            </Layout>
            <Layout>
              <IdentityLink type='logout' returnTo>
                {(url) => (
                  <a href={url} style={{ textDecoration: 'none' }}>
                    <Text fontSize={14} fontWeight={600}>
                      Выйти
                    </Text>
                  </a>
                )}
              </IdentityLink>
            </Layout>
          </>
        )}
      </WithUser>
      <WithoutUser>
        <Layout>
          <IdentityLink returnTo>
            {(url) => (
              <a href={url} style={{ textDecoration: 'none' }}>
                <Text fontSize={14} fontWeight={600}>
                  Войти
                </Text>
              </a>
            )}
          </IdentityLink>
        </Layout>
        <Layout ml={32} display={['none', 'flex', 'flex']}>
          <IdentityLink type='registration' returnTo>
            {(url) => (
              <>
                {/* @ts-ignore */}
                <Button as='a' href={url} style={{ textDecoration: 'none' }}>
                  Создать аккаунт
                </Button>
              </>
            )}
          </IdentityLink>
        </Layout>
      </WithoutUser>
      <Layout flexBasis={[24, 32, 48]} />
    </Row>
  </Box>
)
