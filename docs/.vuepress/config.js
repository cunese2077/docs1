// .vuepress/config.js
module.exports = {
  title: "grg",
  description: "但是吧",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    ['meta', { name: 'keywords', content: 'vuepress介绍' }]
  ],
    themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: [
        '',
        'about',
        'about1'
      ]
    }
  }