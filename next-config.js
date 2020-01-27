const prod = process.env.NODE_ENV === 'production'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),

  assetPrefix: prod ? 'https://orllando.com/' : '',

  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }

      return rule;
    })

    return config;
  }
};
