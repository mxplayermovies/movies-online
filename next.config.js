
module.exports = {
  /* Custom webpack configuration */
  webpack: (config, { dev, isServer }) => {
    // Modify webpack configuration here
    return config;
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'uwatchfreeonline.vercel.app'], // Add 'uwatchfreeonline.vercel.app' to the domains array
  },
};
