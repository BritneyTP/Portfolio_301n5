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
  // var $newArticle = $('article.template').clone();
  // $newArticle.find('.byline span').text(this.author);
  // $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 365 / 1000) + ' years ago');
  // $newArticle.find('h1').html(this.title);
  // $newArticle.find('.article-body').html(this.body);
  // $newArticle.attr('data-category', this.category);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 365 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //Add handlebars to render the articles
  var source = $("#article-template").html();
  var template = Handlebars.compile(source);

  return template(this);
};

//Sort the method so that the obj in myData array will be first
myData.sort(function(a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//Create a new obj w/article obj constructor for each object in myData array
//push it to the articles array
myData.forEach(function(obj) {
  articles.push(new Article(obj));
});

//Append each article to html as a new <article> in #articles sect.
articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
