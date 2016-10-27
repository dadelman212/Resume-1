
function moveH (obj) {
  'use strict';
  var h3 = obj.find('h3.rex-portfolio-name');
  var h4 = obj.find('h4.rex-portfolio-category');
  var hr = h3.next('hr');

  h3.insertAfter(hr);
  h4.insertBefore(hr);

  return obj;
}


(function($) {

  


  }
