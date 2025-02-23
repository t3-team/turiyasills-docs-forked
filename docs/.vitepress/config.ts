import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Turiyaskills Documentation",
  description: "Learn how to use Turiyaskills for skills assessment and recruitment",
  themeConfig: {
    logo: 'https://turiyaforms.s3.ap-south-1.amazonaws.com/turiyaskills_icon.jpg',
    siteTitle: 'Turiyaskills Docs',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Features', link: '/features/' },
      { text: 'Platform', link: 'https://www.turiyaskills.co' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' }
        ]
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Features Overview', link: '/features/' },
          { text: 'AI-Powered Assessment', link: '/features/ai-assessment' },
          { text: 'Proficiency Matrix', link: '/features/proficiency-matrix' },
          { text: 'Flexible Plans', link: '/features/plans' },
          { text: 'Credit Management', link: '/features/credits' },
          { text: 'Analytics & Reporting', link: '/features/analytics' },
          { text: 'Job-Resume Parsing', link: '/features/jd-resume-parsing' }
          { text: 'Workflow Automation', link: '/features/automation' },
          { text: 'Features for Small Biz', link: 'features/small-business'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/turiyatreetechnologies/' },
      { icon: 'twitter', link: 'https://x.com/turiyatree' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/turiyatree' }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 2025 Turiyatree Technologies'
    }
  },

  head: [
    ['link', { rel: 'icon', href: 'https://turiyaforms.s3.ap-south-1.amazonaws.com/turiyaskills_icon.jpg' }],
    ['meta', { name: 'theme-color', content: '#f44336' }]
  ],

  appearance: true,
  
  base: '/',
  
  vite: {
    server: {
      host: true,
      port: 5173
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $primary-color: #f44336;
            $text-color: #2c3e50;
          `
        }
      }
    }
  }
})