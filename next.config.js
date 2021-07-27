module.exports = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/generate-sitemap.js");
    }

    return config;
  },
};
