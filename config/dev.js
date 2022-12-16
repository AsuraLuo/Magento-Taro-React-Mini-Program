module.exports = {
  env: {
    NODE_ENV: '"development"',
    REACT_APP_REDUX_LOGGER: true,
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
