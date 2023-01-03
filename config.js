const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://nostrresources.gatsbyjs.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    logoLink: 'https://nostrresources.gatsbyjs.io/',
    title:
      "<a href='https://nostrresources.gatsbyjs.io/'><img class='img-responsive' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Learn logo' /></a>",
    githubUrl: 'https://nostrresources.gatsbyjs.io/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://nostrresources.gatsbyjs.io/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://nostrresources.gatsbyjs.io/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://nostrresources.gatsbyjs.io/' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://nostrresources.gatsbyjs.io/'>graphql </a><div class='greenCircle'></div><a href='https://nostrresources.gatsbyjs.io/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://nostrresources.gatsbyjs.io/',
    favicon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
