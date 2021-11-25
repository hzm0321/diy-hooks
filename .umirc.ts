import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/diy-hooks',
  publicPath: '/diy-hooks/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  resolve: {
    includes: ['docs'],
  },
  title: 'diy-hooks',
  favicon: './logo.svg',
  logo: './logo.svg',
  outputPath: 'docs-dist',
  styles: [`.icon-link:before{content: '' !important;}`], // 强制覆盖 c7n icon 中 icon-link 样式
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'choerodon-ui/pro',
        libraryDirectory: 'es',
        style: true,
      },
      'choerodon-ui',
    ],
  ],
  theme: {
    '@primary-color': '#0840f8',
    '@c-primary': '#0840f8',
  },
  // more config: https://d.umijs.org/config
});
