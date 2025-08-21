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
      { text: 'Releases', link: '/changelog/' },
      { text: 'Platform', link: 'https://www.turiyaskills.co' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'How to Generate Channel Analysis Report', link: '/guide/channel-analysis' },
          { text: 'How to Install Safe Exam Browser', link: '/guide/safe-exam-browser' },
          { text: 'Releases', link: '/changelog/' }
        ]
      },
      {
        text: 'How to Use?',
        items: [
          { text: 'How to create tests & surveys?', link: '/features/smarteval-assess360' },
          { text: 'How to do JD, Resume Parsing?', link: '/features/jd-resume-parsing' },
          { text: 'How to use the features for Small Biz?', link: 'features/small-business'},
          { text: 'How to create skill assessments from JD?', link: 'features/workflow'},
          { text: 'How to use ContactOut API Key?', link: '/features/contactout-integration'},
          { text: 'How to use Resume Pipeline Connectors?', link: '/features/resume-pipeline-connectors'},
          { text: 'How to manage Question Bank?', link: '/features/question-bank'}    
        ]
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Features Overview', link: '/features/' },
          { text: 'Assessment App Features', link: '/features/assessment-platform' },
          { text: 'Top1 App Features', link: '/features/top1-app' },
          { text: 'AI-Powered Assessment', link: '/features/ai-assessment' },
          { text: 'Proficiency Matrix', link: '/features/proficiency-matrix' },
          { text: 'Flexible Plans', link: '/features/plans' },
          { text: 'Credit Management', link: '/features/credits' },
          { text: 'Analytics & Reporting', link: '/features/analytics' },
          { text: 'Workflow Automation', link: '/features/automation' },
          { text: 'Team Recruitment', link: '/features/team-recruitment' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/turiyaskills/' },
      { icon: 'twitter', link: 'https://x.com/turiyaskills' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/turiyaskills' }
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