import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'raetable',
    prefersColor: { default: 'auto' },
    footer: '@raetable',
    socialLinks: {
      github: 'https://github.com/mmdctjj/raetable'
    },
  },
});
