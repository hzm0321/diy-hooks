module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
