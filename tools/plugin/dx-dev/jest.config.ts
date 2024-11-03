export default {
  displayName: 'dx-dev',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/tools/plugin/dx-dev',
  passWithNoTests: true
};
