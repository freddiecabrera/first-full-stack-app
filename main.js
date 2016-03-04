'use strict';
$(function() {
  $('.btn').click(function(){
    getUrl('#title');
  });
});

function getUrl(str) {
  var value = JSON.stringify($(str).val());
  console.log(value.charAt(2));
  if(value.charAt(2) === 'm'){
    value = JSON.parse(value);
    var url = `http://localhost:3000${value}`;
    console.log(url);
    ajaxCall(url);
  }

  if (value.charAt(2) === 'g') {
      value = JSON.parse(value);
      var url = `http://localhost:3000${value}`;
      ajaxCall(url,'img');
  }

  if (value.charAt(2) === 's') {
      var url = `http://localhost:3000${value}`;
      ajaxCall(url);
  }

  if (value.charAt(2) === 'b') {
    var url = `http://localhost:3000${value}`;
    ajaxCall(url);
  }
}

function ajaxCall(userCall, type){
  console.log(userCall);
  $.ajax({
    method: 'GET',
    url: userCall,
    success: function(data) {
      console.log('called');
      data = JSON.parse(data);
      console.log(data);
      if(type === 'img'){
        $('.holder').html(`<img src='${data.url}' width='300px' height='300px' />`);
      } else {$('.holder').html(`<h1>${data.url}</h1>`);}

    },
    error: function functionName() {
      console.error('Not working');
    }
  });
}
