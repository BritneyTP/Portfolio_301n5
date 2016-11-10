'use strict';
var articles = [];

/* Object constructor based on my data*/
function Article(obj) {
  this.author = obj.author;
  this.publishedOn = obj.publishedOn;
  this.title = obj.title;
  this.body = obj.body;
  this.category = obj.category;
}

//Article object literal
Article.prototype.toHtml = function() {

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 365 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //Add handlebars to render the articles
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);

  return template(this);
};
