module.exports = {
  title: 'Final Project ChemBE MEB (Fall 2020) - BlueJayChemBE (Aayush Gandhi, Jimmy Hu, Mia Grahn)',
  tagline: 'CRISPR Enables Crisper Detection of COVID',
  url: 'https://finalproject-chembe-f20.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Aayush Gandhi', // Usually your GitHub org/user name.
  projectName: 'FinalProjectWebsite', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Final Project ChemBE F20',
      logo: {
        alt: 'My Site Logo',
        src: 'img/websitelogo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Project Details',
          position: 'left',
        },
        {to: 'blog', label: 'About Us', position: 'left'},
        {
          href: 'https://github.com/AayushGithub/FinalProjectWebsite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AayushGithub/FinalProjectWebsite',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aayush Gandhi, Mia Grahn, Jimmy Hu.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/AayushGithub/FinalProjectWebsite',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AayushGithub/FinalProjectWebsite',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
