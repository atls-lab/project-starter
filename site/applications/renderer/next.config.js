const withPlugins = require('next-compose-plugins')
const { withWorkspaces } = require('@monstrs/next-config-with-pnp-workspaces')

const nextConfig = {
  future: {
    externalDir: true,
    swcFileReading: false,
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
