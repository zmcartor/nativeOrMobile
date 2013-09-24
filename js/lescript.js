$(function(){
  var currentQuestion = 1,
      questionCount = $('ul#questionList li').length || 0,
      nativeBucket = 0,
      responsiveBucket = 0;

  var computeResult = function(){
    var finalContent;
    if (nativeBucket > responsiveBucket) finalContent = $('#finalNative').html();
    else if (nativeBucket < responsiveBucket) finalContent = $('#finalResponsive').html();
    $('main').hide().empty().html(finalContent).fadeIn();
  };

$('main').delegate('button','click',function(e){
  currentQuestion+=1;
  var bucket = $(e.target).data('bucket');
  if(bucket === 'r') responsiveBucket+=1;
  else if(bucket ==='n') nativeBucket+=1;
  if (currentQuestion === questionCount) computeResult();
  else $('main').hide().empty().html($('#q'+currentQuestion+'Content').html()).fadeIn();
  $('li.activeQuestion').removeClass('activeQuestion').addClass('past');
  $('li#q'+currentQuestion).addClass('activeQuestion');
});
});
