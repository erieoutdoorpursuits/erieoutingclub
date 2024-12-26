module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addWatchTarget("assets");
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      }
    };
  };