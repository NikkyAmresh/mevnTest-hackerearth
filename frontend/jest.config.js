module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testResultsProcessor: "./node_modules/jest-junit-reporter",
};
