const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
};
