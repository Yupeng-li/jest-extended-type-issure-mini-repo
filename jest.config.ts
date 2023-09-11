import type {Config} from 'jest';

const config: Config = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>/../../../node_modules'],
    setupFilesAfterEnv: [
        'jest-extended/all',
        ],
    testMatch: [
        '<rootDir>/**/*.test.ts?(x)',
    ],
};

export default config;
