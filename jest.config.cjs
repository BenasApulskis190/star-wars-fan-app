module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { diagnostics: false }],
    },
};
