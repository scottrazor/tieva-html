import postcssPlugin from "@jgarber/eleventy-plugin-postcss";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPlugin(postcssPlugin);
  
    return {
      passthroughFileCopy: true
    };
}
  