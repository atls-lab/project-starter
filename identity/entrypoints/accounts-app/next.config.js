const withPlugins = require('next-compose-plugins')
const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    // eslint-disable-next-line
    config.resolve.alias['@emotion/react'] = require.resolve('@emotion/react')
    // eslint-disable-next-line
    config.resolve.alias['@emotion/styled'] = require.resolve('@emotion/styled')

    return config
  },
}

module.exports = withPlugins([withWorkspaces], nextConfig)
