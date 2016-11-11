'use strict';

$(document).ready(function() {

  $('.tab-content').hide();
  $('#home').fadeIn();
  $('body').toggleClass('home-body');

  // ================ MOBILE DROPDOWN =======================
  $('#header-menu').on('click', function() {
    $('#main-nav').toggleClass('open-nav');
  });

  // ================= MAIN NAVIGATION ===================
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

});
