module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      port: 3000,
      host: "localhost",
      https: false,
    },
    esnextModules: ["taro-ui"],
  },
};
