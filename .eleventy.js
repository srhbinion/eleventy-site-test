module.exports = function (config) {
  config.addCollection('posts', (collection) => {
    return collection.getFilteredByGlob('src/posts/*');
  });
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'templates',
    },
    templateFormats: ['html', 'css'],
    htmlTemplateEngine: 'liquid',
  };
};
