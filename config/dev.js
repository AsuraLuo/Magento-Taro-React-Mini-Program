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
      proxy: {
        "/graphql": {
          target: `http://82.157.172.168`,
          changeOrigin: true,
          pathRewrite: {
            "^/graphql": "graphql",
          },
        },
      },
    },
    esnextModules: ["taro-ui"],
  },
};
