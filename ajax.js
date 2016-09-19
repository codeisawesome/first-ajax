$(document).ready(function () {

  $('#step12').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: {},
      dataType: "text"
    });
  });

  $('#step3456').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "GET",
      data: {},
      dataType: "text"
    }).done(function (responseData) {
        console.log(responseData);
        $('#step3456').append(responseData)
      }).fail(function (responseData) {
        console.log(responseData);
        $('#step3456').append("sorry this does not work")
      }).always(function (responseData) {
        console.log("Hey! request is finished!");
      })
  });

  $('#step7').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      data: {},
      dataType: "text"
    }).done(function (responseData){
      $('#step7').append(responseData);
    })
  });

  $('#step8').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      data: {},
      dataType: "text"
    }).done(function (responseData){
      $('#step8').append(responseData);
    })
  });

  $('#step9').click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      data: {},
      dataType: "html"
    }).done(function (responseData){
      $('#step9').append(responseData);
    })
  });

});
