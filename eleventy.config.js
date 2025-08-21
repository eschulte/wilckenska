import relativeLinks from "./_config/relative-links.js";

export default async function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addLiquidFilter("fixDate", function(value){
    value.setTime(value.getTime() + (5*60*60*1000));
    return value; })

  // Relative URLs.
  eleventyConfig.addPlugin(relativeLinks);
};

