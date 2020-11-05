module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
  env: {
    test: {
      plugins: [
        'require-context-hook',
      ],
    },
  },
};
