import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.(test|spec).ts?(x)', '**/?(*.)+(test|spec).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs', 'mts'],
  transform: {
    '^.+\\.(ts|tsx|mts)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react',
        },
      },
    ],
    '^.+\\.(js|jsx|mjs)$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { node: 'current' },
            },
          ],
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library/react-native)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
};

export default config;
