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

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
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
