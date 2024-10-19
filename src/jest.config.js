export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    './jest.setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.tsx?$': 'babel-jest', // TypeScriptファイルをBabelで変換
  },
};
