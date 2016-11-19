// 'use strict';
// (function(module) {
//   //configure a view obj to hold all functions
//   var articleView = {};
//
//
//   //Add event handler to fade in the nav menu
//   articleView.handleMainNav = function () {
//     //
//     $('.main-nav').on('click', function() {
//       //  $('.tab-content').hide();
//       $('#' + $(this).data('.tab-content')).fadeIn(500);
//     });
//     $('.main-nav :first').click();
//   };
//
//   //add event handler to show more content
//   articleView.handleShowMore = function() {
//     $('#article-body *:nth-of-type(n+2)').hide();
//     $('#articles').on('click', '.read-on', function(e) {
//       e.preventDefault();
//       $(this).parent().find('#article-body > *:nth-of-type(n+2)').toggle(750);
//       if($(this).text().includes('Read')) {
//         $(this).text('Show Less \u2191');
//       } else {
//         $(this).text('Read On \u2192');
//
//       }
//
//     });
//
//     $('#').show();
//     $('#word').val(JSON.stringify(article) + ',');
//
//     article.initIndexPage = function(){
//       Article.all.forEach(function(a){
//         $('#articles').append(a.html());
//       });
//
//     };
//     articleView.handleNavMenu();
//     articleView.handleShowMore();
//   };
//
//   articleView.initAdminPage = function(){
//     var template = Handlebars.compile($('#author-template').text());
//
//     Article.numWordsByAuthor().forEach(function(stat) {
//       $('.author-stats').append(template(stat));
//     })
//
//     ('#blog-stats .articles').text(Article.all.length);
//     ('#blog-stats .words').text(Article.numWordsAll());
//   };
//   //Call the functions
//   module.articleView = articleView;
// })(window);
(function(module) {
  'use strict';

  var articleView = {};
  $(document).ready(function() {

    $('.tab-content').hide();
    $('#home').fadeIn();
    $('body').toggleClass('home-body');

    // MOBILE DROPDOWN //
    $('#header-menu').on('click', function() {
      $('#main-nav').toggleClass('open-nav');
    });

    // MAIN NAVIGATION //
    $('#main-nav').on('click', '.tab', function() {
      var $tab = $(this).attr('data-content');
      console.log($tab);
      $('.tab-content').fadeOut();
      $('#' + $tab).fadeIn();
    });

    $('#home-nav').on('click', function() {
      $('body').addClass('home-body');
    });

    $('#about-nav, #blog-nav, #contact-nav').on('click', function() {
      $('body').removeClass('home-body');
    });

    // RESUME //
    $('#resume-button').on('click', function() {
      $('.tab-content').hide();
      $('#resume').fadeIn();
      $('body').removeClass('home-body');
    });

    // PORTFOLIO //
    $('#portfolio-button').on('click', function() {
      $('.tab-content').hide();
      $('#portfolio').fadeIn();
      $('.show-full').hide();
      $('body').removeClass('home-body');
    });

    $('#portfolio .proj-logo').on('mouseover', function() {
      $('.proj-logo').hide();
      $('.show-full').fadeIn();
    });

    $('#portfolio .show-full').on('mouseout', function() {
      $('.show-full').hide();
      $('.proj-logo').fadeIn();
    });

    

  });
  module.articleView = articleView;
})(window);
