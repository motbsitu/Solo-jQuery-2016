$(document).ready(function() {
    var countRed = 0;
    var countYellow = 0;
    var countGreen = 0;
    var countBlue = 0;


    $('.color-button').click(function(event) {
          var buttonClicked = $(this);
          console.log(this);
        console.log('Some button was clicked');

        createBoxes(buttonClicked);
        countColorClick(buttonClicked);
    });

//function to create boxes, assigned specific color
//based on button click
    function createBoxes(buttonClicked) {

        var $box = $('<div></div>');

        if(buttonClicked.attr('data-color') == "red"){
          $box.addClass('red');
        }
        if(buttonClicked.attr('data-color') == "yellow"){
          $box.addClass('yellow');
        }
        if(buttonClicked.attr('data-color') == "green"){
          $box.addClass('green');
        }
        if(buttonClicked.attr('data-color') == "blue"){
          $box.addClass('blue');
        }
        $box.addClass('color-cube');

        $('.container').append($box);

    }

  //function to count
    function countColorClick(buttonClicked){
      if(buttonClicked.attr('data-color') == "red"){
        countRed++;
        console.log(countRed);
        $("p[id=red]").text('Total Red: ' + countRed);
      }
      if(buttonClicked.attr('data-color') == "yellow"){
        countYellow++;
        $("p[id=yellow]").text('Total Yellow: ' + countYellow);
      }
      if(buttonClicked.attr('data-color') == "green"){
        countGreen++;
        $("p[id=green]").text('Total Green: ' + countGreen);
      }
      if(buttonClicked.attr('data-color') == "blue"){
        countBlue++;
        $("p[id=blue]").text('Total Blue: ' + countBlue);
      }

}

});
