// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        hot: false,
        ts: true,
      },
    ],
    "@linaria",
  ],
};
