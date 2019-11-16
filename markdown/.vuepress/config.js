const autometa_options = {
    site: {
        name: 'Tyler Merry, friend to the internet',
        twitter: 'tyler_merry'
    },
    canonical_base: 'https://www.tymerry.com',
    description: 'a blog by Tyler Merry on UX, Programming and Colorado'
};

module.exports = {
    title: "Tyler Merry",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Articles', link: '/articles.html' },
            { text: 'External', link: 'https://google.com' },
        ]
    },
    head: [
        ['meta', { name: 'google-site-verification', content: '8bkDTzGwYEt1P4NaDKuhxLUJbosgzc0Pz3tPP29wAgE' }]
    ],
    plugins: [
        'autometa', autometa_options,
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-24149420-1' // UA-00000000-0
            }
        ]
    ],
}
