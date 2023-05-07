$(function(){

  $('.timer-quick').startTimer();

  $('.timer-span').startTimer({
      elementContainer: "span"
  });

  $('.timer').startTimer({
    onComplete: function(){
      console.log('Complete');
    }
  });

  $('.timer-pause').startTimer({
    onComplete: function(){
      console.log('Complete');
    },
    allowPause: true
  });
})