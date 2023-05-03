import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  base: 'raetable',
  logo: '/logo.png',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    entryFile: './src/index.ts',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/raetable/' : '/',
  themeConfig: {
    name: 'raetable',
    prefersColor: { default: 'auto' },
    footer: '@raetable',
    socialLinks: {
      github: 'https://github.com/mmdctjj/raetable'
    },
  },
});
