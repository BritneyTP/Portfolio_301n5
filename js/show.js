'use strict';

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
    $('.title').hide();
    $('body').removeClass('home-body');
  });

  $('#portfolio .byline').on('mouseover', function() {
    $('.byline').hide();
    $('.title').fadeIn();
  });

  $('#portfolio .title').on('mouseout', function() {
    $('.title').hide();
    $('.byline').fadeIn();
  });



});
