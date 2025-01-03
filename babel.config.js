module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Reanimated 플러그인 추가
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: `.env.${process.env.NODE_ENV || 'development'}`,
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
  ],
};

// 캐시 삭제 필요.
// npx react-native start --reset-cache
