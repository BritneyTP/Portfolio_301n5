'use strict';

var projects = [];

function Project (opts) {
  this.projName = opts.projName;
  this.developers = opts.developers;
  this.deployedOn = opts.deployedOn;
  this.projLogo = opts.projLogo;
  this.projFull = opts.projFull;
  this.projRepo = opts.projRepo;
  this.projURL = opts.projURL;
  this.description = opts.description;
};

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

projectData.sort(function(a, b) {
  return (new Date(b.deployedOn)) - (new Date(a.deployedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(y) {
  $('#portfolio').append(y.toHtml());
});
