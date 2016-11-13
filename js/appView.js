'use strict';

//configure a view obj to hold all functions
var articleView = {};


//Add event handler to fade in the nav menu
articleView.handleNavMenu = function() {
  $('nav').on('click', '.tab', function() {
    $('.menu-content').hide();
    var $id = $(this).attr('data-content');
    $('main').find('#' + $id).fadeIn();
  });
  $('nav .tab:first').click();
};

//add event handler to show more content
articleView.handleShowMore = function() {
  $('.article-body').hide();
  $('article').on('click', '.read-more', function() {
    event.preventDefault();
    console.log('THIS.PARENT', $(this).parent());
    $(this).parent().find('.article-body').show();
    $(this).html('Show less &rarr;').removeClass('read-more').addClass('show-less');
  });

  $('article').on('click', '.show-less', function() {
    event.preventDefault();
    $(this).parent().find('.article-body').hide();
    $(this).html('read-more &rarr;').removeClass('show-less').addClass('read-more');
  });
};

//Call the functions
articleView.handleNavMenu();
articleView.handleShowMore();
