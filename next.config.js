const withSass = require('@zeit/next-sass');

module.exports = withSass({
    exportPathMap: () => {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contact': { page: '/contact' }
        }
    }
})