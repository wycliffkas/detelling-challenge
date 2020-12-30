/* eslint-env node */

module.exports = {
  schema: 'schema.graphql',
  src: './src',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  // extensions: ["ts", "tsx"],
  language: 'typescript',
  customScalars: {
    ID: 'String',
  },
};
  