const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "", // important for GitHub Pages project sites
  },
  module: {
    rules: [
      // Swiper and any library CSS
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },

      // Your SCSS + autoprefixer
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [require("autoprefixer")] },
            },
          },
          "sass-loader",
        ],
      },

      // Images/fonts referenced from SCSS/CSS/JS (emits into dist/)
      {
        test: /\.(png|jpe?g|gif|svg|webp|woff2?|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: { name: "assets/[name].[hash].[ext]" },
      },
    ],
  },

  plugins: [
    // Copy images/fonts used directly in HTML so they exist in dist/
    new CopyWebpackPlugin({
      patterns: [
         { from: "src/assets/images", to: "assets/images" },
      ],
    }),
  ],
};
