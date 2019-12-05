module.exports = function babelConfig(api) {
  api.cache.forever();
  return {

    presets: [
      [
        '@babel/env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: ['> 1%'],
          },
        },
      ],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      '@babel/syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              targets: {
                browsers: ['> 1%'],
              },
            },
          ],
          '@babel/typescript',
          '@babel/react',
        ],
      },
    },
  };
};
