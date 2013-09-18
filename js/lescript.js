$(function(){
  var currentQuestion = 1,
      questionCount = $('ul#questionList li').length || 0,
      nativeBucket = 0,
      responsiveBucket = 0;

  var computeResult = function(){
    if (nativeBucket > responsiveBucket) {
      console.log("Native!!");
      console.log(nativeBucket);
      return;
    }
    console.log(responsiveBucket);
    console.log("responsive");
  };

$('main').delegate('button','click',function(e){
  currentQuestion+=1;
  if (currentQuestion === questionCount){
    computeResult();
  }
  var bucket = $(e.target).data('bucket');
  if(bucket === 'r') responsiveBucket+=1;
  else if(bucket ==='n') nativeBucket+=1;

  $('main').hide().empty().html($('#q'+currentQuestion+'Content').html()).fadeIn();
  $('li.activeQuestion').removeClass('activeQuestion');
  $('li#q'+currentQuestion).addClass('activeQuestion');
});
});
