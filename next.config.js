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
};
