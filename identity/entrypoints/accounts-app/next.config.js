module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
    outputStandalone: true,
  },
  webpack: (config) => {
    // eslint-disable-next-line
    config.resolve.alias['@emotion/react'] = require.resolve('@emotion/react')
    // eslint-disable-next-line
    config.resolve.alias['@emotion/styled'] = require.resolve('@emotion/styled')
    // eslint-disable-next-line
    config.resolve.alias['@atls/next-identity-integration'] = require.resolve(
      '@atls/next-identity-integration'
    )

    return config
  },
}
