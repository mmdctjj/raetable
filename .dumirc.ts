import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  base: 'raetable',
  favicons: [isProd ? '/raetable/favicon.ico' : '/favicon.ico'],
  metas: [
    { name: 'keywords', content: 'raetable' },
    { name: 'description', content: 'react antd Easy Table' },
  ],
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    entryFile: './src/index.ts',
  },
  publicPath: isProd ? '/raetable/' : '/',
  themeConfig: {
    logo: isProd ? '/raetable/logo.png' : '/logo.png',
    name: 'raetable',
    prefersColor: { default: 'auto' },
    footer: '@raetable',
    socialLinks: {
      github: 'https://github.com/mmdctjj/raetable',
    },
  },
});
