module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        include: /src/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 999999999,
            },
          },
        ],
      },
    ],
  },
};
