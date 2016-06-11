$(function () {
  //put your js in here
  $(window).keydown(function (event) {
    //if q is pressed do something
    if (event.keyCode == 81) {
      movePlayer(1);

    }
    //if p is pressed do something else
    if (event.keyCode == 80) {
      movePlayer(2);

    }
    console.log(event.keyCode)
  })
})

function movePlayer(playerNumber) {

  var box;

  if (playerNumber == 1) {
    box = $(".player1 .active");
  }
  if (playerNumber == 2) {
    //find the active cell for this player - $()
    box = $(".player2 .active");
  }
  //stop it being active - # removeClass()
  box.removeClass('active')
    //find the cells neighbour # next()
  box.next().addClass('active')

  //if I don't have a neighbour, create an alert saying game over # alert() if
  if (box.next().length == 0) {
    alert('Game Over Player ' + playerNumber + ' Smells!')
  }


}


//bonus points
//reset a game
//count the number of wins for each player
//display the high scores on the page # - text()
