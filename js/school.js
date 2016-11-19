'use strict';

var education = [];

function Education (opts) {
  this.school = opts.school;
  this.schoolImage = opts.schoolImage;
  this.location = opts.location;
  this.yearsAttended = opts.yearsAttended;
  this.degree = opts.degree;
  this.honors = opts.honors;
  this.description = opts.description;
};

Education.prototype.toHtml = function() {
  var source = $('#education-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

educationData.forEach(function(ele) {
  education.push(new Education(ele));
});

education.forEach(function(y) {
  $('#education').append(y.toHtml());
});
