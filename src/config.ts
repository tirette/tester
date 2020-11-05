import { local } from '@tirette/utilities/lib-cjs';
import internal from './utils/internal';

module.exports = {
  rootDir: local(''),
  moduleDirectories: [local('src'), local('node_modules')],
  setupFiles: [internal('../.jest/registerContext.js')],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: internal('babelConfig.js') }],
    '^.+\\.(svg|pdf|jpg|png)$': internal('../.jest/fileTransform.js'),
  },
};
