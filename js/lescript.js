$(function(){
  // need to delegate but works...
var currentQuestion = 0;
$('button').click(function(e){
  currentQuestion+=1;
  $('main').empty();
  $('main').html($('#q'+currentQuestion+'Content').html());
  console.log(currentQuestion);
});
});
