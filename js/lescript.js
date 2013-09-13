$(function(){
  var currentQuestion = 0,
      questionCount = $('ul#questionList li').length || 0,
      nativeBucket = [],
      responsiveBucket = [];

  var computeResult = function(){
    alert('you should build at Taivara!!');
  };

$('main').delegate('button','click',function(e){
  if (currentQuestion === questionCount){
    computeResult();
    return;
  }
  currentQuestion+=1;
  $('main').hide().empty().html($('#q'+currentQuestion+'Content').html()).fadeIn();
});
});
