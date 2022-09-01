const { withFederatedSidecar } = require("@module-federation/nextjs-ssr");
const withPlugins = require("next-compose-plugins");


const nextConfig = {
  env: {
    VERCEL: process.env.VERCEL,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  strictMode: true,

  // assetPrefix: process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : undefined,
  webpack(config, options) {
    const { webpack, isServer } = options;
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_HUB__: "{}",
      })
    );

    config.module.rules.push({
      test: [/_app.[jt]sx?/, /_document.[jt]sx?/],
      loader: "@module-federation/nextjs-ssr/lib/federation-loader.js",
    });

    return config;
  },
};
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    home: `home@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    itemcatalogue: `itemcatalogue@http://localhost:3001/_next/static/${location}/remoteEntry.js`
  };
};

const name = "home";
module.exports = withPlugins(
  [
    withFederatedSidecar(
      {
        name,
        filename: "static/chunks/remoteEntry.js",
        exposes: {
        },
        remotes,
        shared: {
          "use-sse": {
            singleton: true,
          },
        },
      },
      {
        experiments: {
          flushChunks: true,
          hot: true,
        },
      }
    ),
  ],
  nextConfig
);
