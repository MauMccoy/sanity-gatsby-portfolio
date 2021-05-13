export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '609d7f6bfdf71112a1acd3d6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-edkrtk93',
                  apiId: 'd9d2d158-368c-470f-8fa8-db1ba27b8cea'
                },
                {
                  buildHookId: '609d7f6bbebc780b215e9924',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n4e83ucu',
                  apiId: 'a34462b7-0f6b-49ef-9d85-23bd3edb82b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MauMccoy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n4e83ucu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
