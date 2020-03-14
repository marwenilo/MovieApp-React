 import { override, fixBabelImports, addLessLoader } from 'customize-cra';

export default override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    
  }),
 addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
 }),
);