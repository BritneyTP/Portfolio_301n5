'use strict';
// Articles array that loadAll is pushing into
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
  var source = $("#article-template").html();
  var template = Handlebars.compile(source);

  return template(this);
};

Article.fetchAll = function() {
  $.ajax({
    url: 'data/word.json',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data);
      Article.loadAll(data)
    },
  });
};


Article.loadAll = function(jsonData) {
  // Sort by data from the json data
  jsonData.sort(function(a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  // Push to the articles array on top
  jsonData.forEach(function(obj) {
    articles.push(new Article(obj));
  });
}


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
