// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'neoVI API',
  tagline: 'Intrepid Control Systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cdn.intrepidcs.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/neovi-api',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'intrepidcs', // Usually your GitHub org/user name.
  projectName: 'icsneoviapidocu', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/intrepidcs/icsneoviapidocu/blob/master/',
            breadcrumbs: true,
        },
        blog:false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'neoVI API Docs',
        logo: {
          alt: 'neoVI API Docs',
          src: 'img/favicon.ico',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          //   dropdownActiveClassDisabled: true,
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://intrepidcs.com',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          // {
          //   type: 'search',
          //   position: 'left',
          // },
          {
            href: 'https://intrepidcs.com/support/support-resources/',
            label: 'All Docs',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/products/',
            label: 'Products',
            position: 'right',
            className: 'nav-link',
          },

          {
            href: 'https://intrepidcs.com/learning-center/',
            label: 'Learning Center',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/support/',
            label: 'Support',
            position: 'right',
            className: 'nav-link',
          },

          {
            href: 'https://github.com/intrepidcs/neoVI_API_Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   src: 'img/IntrepidCS-Website.png',
        //   href: 'https://intrepidcs.com/',
        //   width: 300,
        //   height: 50,
        // },
        links: [
          {
            title: 'Applications',
            items: [
              {
                label: 'Cybersecurity',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/cybersecurity/',
              },
              {
                label: 'Data Logging',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/data-logging/',
              },
              {
                label: 'Simulate ECU Functions',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/simulate-ecu-functions/',
              },
              {
                label: 'Diagnostics, Testing and Validation',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/diagnostics-testing-validation/',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Vehicle Network Adapters',
                href: 'https://intrepidcs.com/products/vehicle-network-adapters/',
              },
              {
                label: 'Data Loggers',
                href: 'https://intrepidcs.com/products/data-loggers/',
              },
              {
                label: 'Software',
                href: 'https://intrepidcs.com/products/software/',
              },
              {
                label: 'Automotive Ethernet Tools',
                href: 'https://intrepidcs.com/products/automotive-ethernet-tools/',
              },
            ],
          },
          {
            title: 'Support ',
            items: [
              {
                label: 'Support Resources',
                href: 'https://intrepidcs.com/support/support-resources/',
              },
              {
                label: 'Contact Support',
                href: 'https://intrepidcs.com/support/contact-support/',
              },
              {
                label: 'Class Schedule & Registration',
                href: 'https://intrepidcs.com/learning-center/class-schedule-registration/',
              },
              {
                label: 'Training Video Library',
                href: 'https://intrepidcs.com/learning-center/videos/',
              },
            ],
          },
          {
            title: 'Company ',
            items: [
              {
                label: 'About Us',
                href: 'https://intrepidcs.com/about/',
              },
              {
                label: 'News',
                href: 'https://intrepidcs.com/news/',
              },
              {
                label: 'Events',
                href: 'https://intrepidcs.com/events/',
              },
              {
                label: 'Contact Us',
                href: 'https://intrepidcs.com/contact-us/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://intrepidcs.com/" class="ics-link"> Intrepid Control Systems, Inc.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp','basic','vbnet'],
      },

      // algolia
    }),
};

module.exports = config;
