import { HtmlBasePlugin } from "@11ty/eleventy";
import relativeLinks from "./_config/relative-links.js";
import markdownIt from 'markdown-it';
import markdownItContainer from 'markdown-it-container';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';

export default async function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addPlugin(HtmlBasePlugin);

  const md = markdownIt({
    html: true, // Enable HTML tags in markdown
    linkify: true // Enable links
  }).use(markdownItContainer, 'section', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="separator"></div><div class="section">\n';
    } else {
      // closing tag
      return '<div style="clear:both;"></div></div>\n';
    }
  }
  }).use(markdownItContainer, 'right', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="right">\n';
    } else {
      // closing tag
      return '</div>\n';
    }
  }
  }).use(markdownItContainer, 'publications', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="publications">\n';
    } else {
      // closing tag
      return '</div>\n';
    }
  }
  })
        .use(markdownItAnchor)
        .use(markdownItAttrs);;

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addLiquidFilter("fixDate", function(value){
    value.setTime(value.getTime() + (5*60*60*1000));
    return value; })

  // Relative URLs.
  eleventyConfig.addPlugin(relativeLinks);
};

