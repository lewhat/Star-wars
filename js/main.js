var $w = $( window ).width();
var $dW = $('.bb8').css('width');
$dW = $dW.replace('px', '');
$dW = parseInt($dW);
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 4;
var $dAccel = 1.04;
var $dRot = 0;
var $mPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = false;

function moveDroid(){
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(moveDroid, 10);

$( document ).on( "mousemove", function( event ) {
  $('h2').addClass('hide');
  $mPos = event.pageX;
  return $mPos;
});


//----Darth Vader---



// var _gaq = _gaq || [];
//     _gaq.push(['_setAccount', 'UA-20019783-1']);
//     _gaq.push(['_trackPageview']);
  
//     (function() {
//       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//     })();






// ----quotes ------




function newQuote(){
  var quotes = ["Do. Or do not. There is no try.@Yoda","Remember: Your focus determines your reality.@Qui-Gon Jinn","Be mindful of your thoughts Anakin. They will betray you.@Obi-Wan Kenobi","Fear is the path to the dark side.@Yoda","I am rather embarrassed, General Solo, but it appears that you are to be the main course at a banquet in my honor.@C-3PO","Judge me by my size, do you?@Yoda","Your eyes can deceive you; don’t trust them.@Obi-Wan Kenobi","In my experience, there is no such thing as luck.@Obi-Wan Kenobi","Never tell me the odds.@Han Solo","Fear leads to anger, anger leads to hate, hate leads to suffering.@Yoda","There is always a bigger fish.@Qui-Gon Jinn","I find your lack of faith disturbing.@Darth Vader", "Chewie, We are Home.@Han Solo", "Women Always Figure Out The Truth. Always.@Han Solo", "Why does everyone want to go back to Jakku?@Finn", "I have a bad feeling about this.@Qui-Gon Jinn"];
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  var result = randomQuote.split("@");
  $("#saying").text(result[0]);
  $("#author").text("- " + result[1]);
  };
  
  $("#newBtn").on( "click", function() {
    newQuote();
  });  
 
  $("#tweetBtn").on('click',function(){
  var tweetText = $("#quotes").text();
  window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(tweetText));
});
  

newQuote()