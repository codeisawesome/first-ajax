$(document).ready(function () {

  $('#step12').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: {},
      dataType: "text"
    });
  });

});
