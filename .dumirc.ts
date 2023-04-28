import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    docDirs: [{ type: 'component', dir: 'src/components' }]
  },
  themeConfig: {
    name: 'raetable',
  },
});
