$(document).ready(function() {
    var countRed = 0;
    var countYellow = 0;
    var countGreen = 0;
    var countBlue = 0;

    $('.color-button').click(function() {
        console.log('Some button was clicked');

        createBoxes();



    });

//function to create boxes, assigned specific color
//based on button click
    function createBoxes() {

        var $box = $('<div></div>');
        $box.addClass('color-cube');

        $('.container').append($box);

    }

//function to associate box color to create with button clicked
  function boxColor(){
    if(data-color == ){
      
    }
  })
  //   function updateDOM() {
  //   $(p id = 'red').html(countRed);
  // }


  //function to count
  countRed++;
  countYellow++;
  countGreen++;
  countBlue++;

});
