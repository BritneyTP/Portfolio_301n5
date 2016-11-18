'use strict';
(function(module) {
  //configure a view obj to hold all functions
  var articleView = {};


  //Add event handler to fade in the nav menu
  articleView.handleMainNav = function () {
    //
    $('.main-nav').on('click', function() {
      //  $('.tab-content').hide();
      $('#' + $(this).data('.tab-content')).fadeIn(500);
    });
    $('.main-nav :first').click();
  };

  //add event handler to show more content
  articleView.handleShowMore = function() {
    $('#article-body *:nth-of-type(n+2)').hide();
    $('#articles').on('click', '.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('#article-body > *:nth-of-type(n+2)').toggle(750);
      if($(this).text().includes('Read')) {
        $(this).text('Show Less \u2191');
      } else {
        $(this).text('Read On \u2192');

      }

    });

    $('#').show();
    $('#word').val(JSON.stringify(article) + ',');

    article.initIndexPage = function(){
      Article.all.forEach(function(a){
        $('#articles').append(a.html());
      });

    };
    articleView.handleNavMenu();
    articleView.handleShowMore();
  };

  articleView.initAdminPage = function(){
    var template = Handlebars.compile($('#author-template').text());

    Article.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    })

    ('#blog-stats .articles').text(Article.all.length);
    ('#blog-stats .words').text(Article.numWordsAll());
  };
  //Call the functions
  module.articleView = articleView;
})(window);
