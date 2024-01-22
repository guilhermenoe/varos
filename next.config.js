/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sua configuração existente aqui...

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
