module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: 'Assets/',
            rootPathSuffix: './src/assets',
          },
          {
            rootPathPrefix: 'Utils/',
            rootPathSuffix: 'src/utils/',
          },
          {
            rootPathPrefix: 'Components/',
            rootPathSuffix: './src/components',
          },
          {
            rootPathPrefix: 'Pages/',
            rootPathSuffix: './src/pages',
          },
          {
            rootPathPrefix: 'Routes/',
            rootPathSuffix: './src/routes',
          },
          {
            rootPathPrefix: 'Runtime/',
            rootPathSuffix: './src/runtime',
          },
          {
            rootPathPrefix: 'Store/',
            rootPathSuffix: './src/store',
          },
        ],
      },
    ],
  ],
};
