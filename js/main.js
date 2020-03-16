console.log("[main.js]");

var aFonts = ["Didot", "American Typewriter", "Helvetica"];

var angle = 1;



$("#btn-save-png").on("click", function(){

  console.log("saving PNG");

  var node = document.getElementById('boxSavedTexts');

  domtoimage.toBlob(node)
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });

});

// work in progress, controls don't work yet
var randomizerControls = {
  'state_color' : 0,
  'state_size' : 0,
  'state_fontFamily' : 0,
  'state_lineHeight' : 0,
  'state_rotation' : 0
};

function coinToss(){
  var value = Math.random();
  if (value > 0.5){
    return  1.5
  } else {
    return -1.5
  }
}

var boxesControl = $(".boxControl");

function flipSwitch(target){
  // console.log("flipping a switch");
  // console.log($(this));
}

boxesControl.on("click", function(){

  // console.log("controller clicked");
  var controlQuery = "state_" + $(this).attr("data-control-type");
  randomizerControls[controlQuery] = !randomizerControls[controlQuery];
  colorizeControls();

});

function getRandomFont(){
  var dice = Math.floor(Math.random()*aFonts.length);
  return aFonts[dice];
}

function randomizeFont(target){

    target.css("font-family", getRandomFont());

} // end of randomizeFont()

function randomizeSize(target){

  var randomSize = Math.random()+0.5;
  target.css("font-size", randomSize+"rem");
  
} // end of randomizeSize()

function randomizeColor(target){
  target.css("color", randomColor());
} // end of randomizeColor();

function randomizeLineHeight(target){
  var randomLineHeight = Math.random();
  target.css("line-height", randomLineHeight);
} // end of randomizeLineHeight();

function randomizeRotation(target){
    angle = angle + coinToss();
    rotate(target, angle);
};

function randomizeOpacity(target){
   var randomOpacity = Math.random();
   target.css("opacity", randomOpacity);
};

var xOffset = $("#boxActiveText").offset().left;
var yOffset = $(window).height()/6;

  $("#mainInput").on("keydown", function(){

    $("#boxSavedTexts").prepend("<div class='boxSavedText'></div>");
    var newText = $("#boxSavedTexts").find(".boxSavedText:first");
    
    // populate with input content
    var inputValue = $(this).val();
    // console.log(inputValue);

    // these vars are unused
    var currentX = newText.offset().left;
    var currentY = newText.offset().top;

    // newText.offset({top: yOffset})

    // the .replace is there so echo shows spaces
    newText.html(inputValue.replace(/\s/g, '&nbsp;'));

    if (randomizerControls.state_size == 1){ randomizeSize(newText) }
    if (randomizerControls.state_fontFamily == 1){ randomizeFont(newText) };
    if (randomizerControls.state_color == 1){ randomizeColor(newText) };
    if (randomizerControls.state_lineHeight == 1){ randomizeLineHeight(newText) };
    if (randomizerControls.state_rotation == 1){ randomizeRotation(newText) };
    if (randomizerControls.state_opacity == 1){ randomizeOpacity(newText) };
    //////////////////////////////////////////////////////

    /////////randomize color//////////////////////////////
    
    //////////////////////////////////////////////////////
  })

/// IMPORTED CODE ///
/// IMPORTED CODE ///
/// IMPORTED CODE ///

function randomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

function rotate($el, degrees) {
$el.css({
'-webkit-transform' : 'rotate('+degrees+'deg)',
  '-moz-transform' : 'rotate('+degrees+'deg)',  
  '-ms-transform' : 'rotate('+degrees+'deg)',  
    '-o-transform' : 'rotate('+degrees+'deg)',  
      'transform' : 'rotate('+degrees+'deg)',  
            'zoom' : 1

});
}

/// END OF IMPORTED CODE ///
/// END OF IMPORTED CODE ///
/// END OF IMPORTED CODE ///

function colorizeControls(){

    $.each(boxesControl, function(){

      var controlQuery = "state_"+$(this).attr("data-control-type");
      // console.log(controlQuery);
  
      if(randomizerControls[controlQuery] == 1){
        
      // console.log("active");
      // console.log($(this).css("background-color"));
      $(this).css("background-color", "#C8FCCD");
      return;
  
        } else 
      
      // console.log("inactive");
      // console.log($(this).css("background-color"));
      $(this).css("background-color", "#F5B6BB");
  
    }); // end of $.each

};

$(document).ready(function() {
  // console.log( "ready!" );
  colorizeControls();
});