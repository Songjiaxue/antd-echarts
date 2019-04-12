const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      // '@primary-color': '#25292F',
      // '@layout-header-background': '#25292F',
      // '@layout-body-background': '#FAFAFC',
      '@layout-sider-background': 'transparent'
     },
    }),
  addDecoratorsLegacy(),
);