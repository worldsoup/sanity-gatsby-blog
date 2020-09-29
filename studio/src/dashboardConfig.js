export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f736dd85a40cd014b00ec40',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pdwh78u5',
                  apiId: '34f8ff32-3b67-4587-905d-1a213fca5a94'
                },
                {
                  buildHookId: '5f736dd95fe87a07ce37fef1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nf8vjift',
                  apiId: '28ceb39c-4ef1-4fbb-9b6a-91eee4caa2b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/worldsoup/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nf8vjift.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
