const BLOG = {
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  craftConfigShareUrl: process.env.CRAFT_CONFIG_SHARE_URL
    ? process.env.CRAFT_CONFIG_SHARE_URL
    : 'https://www.craft.me/s/f6C5DYOvtC8erB', // The link to share your craft config
  seo: {
    keywords: []
  },
  analytics: {
    provider: 'umami', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://beeeeemo.dev/tr', // The url of your Umami script
      websiteId: 'f5a96294-9aab-4e31-8e29-000370d77ce9' // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
