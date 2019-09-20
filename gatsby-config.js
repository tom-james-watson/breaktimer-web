module.exports = {
    siteMetadata: {
        title: `BreakTimer`,
        description: `Save yourself from RSI and eye-strain`,
        author: `@tom_j_watson`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#16A085`,
                theme_color: `#16A085`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/breaktimer.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Serif'],
                },
                custom: {
                    families: ['Inter'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
