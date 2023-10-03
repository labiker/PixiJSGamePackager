import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require("copy-webpack-plugin");

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "dist", "assets"),
        to: path.resolve(__dirname, ".webpack", "renderer", "main_window", "assets"),
      },
      {
        from: path.resolve(__dirname, "dist", "audio"),
        to: path.resolve(__dirname, ".webpack", "renderer", "main_window", "audio"),
      },
      {
        from: path.resolve(__dirname, "dist", "fonts"),
        to: path.resolve(__dirname, ".webpack", "renderer", "main_window", "fonts"),
      },
      {
        from: path.resolve(__dirname, "dist", "images"),
        to: path.resolve(__dirname, ".webpack", "renderer", "main_window", "images"),
      },
      {
        from: path.resolve(__dirname, "icons"),
        to: path.resolve(__dirname, ".webpack", "main", "icons"),
      },
    ],
  }),
];
