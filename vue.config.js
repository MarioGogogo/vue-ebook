module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: [/\bvue-awesome\b/]
};
