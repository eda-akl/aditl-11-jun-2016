$(function () {
  //put your js in here
  $(window).keydown(function (event) {
    //if q is pressed do something
    //if p is pressed do something else
    console.log(event.keyCode)
    if (event.keyCode == 81) {
      movePlayer(1);
    } else {
      movePlayer(2);
    }
  })
})

function movePlayer(playerNumber) {
  var activecode = $('.player' + playerNumber + ' .active')
  activecode.removeClass("active");
  var tdplace = activecode.next("td");
  tdplace.addClass("active");
  checktdactive();
  console.log(activecode)

  //find the active cell for this player - $()
  //stop it being active - # removeClass()
  //find the cells neighbour # next()
  //make it active # addClass()
  //if I don't have a neighbour, create an alert saying game over # alert() if
}

function checktdactive() {
  var a = $('.player1 .active')
  var count = 0;
  if (!a.length) {
    alert("Player 1 WIN!! Game Over");
    resetgame();

  }
  var b = $('.player2 .active')
  if (!b.length) {
    alert("Player 2 WIN!! Game Over");
    resetgame();
  }

  function resetgame() {
    $('.player1 td').removeClass("active").first().addClass("active");
    $('.player2 td').removeClass("active").first().addClass("active");
  }

}


//bonus points
//reset a game
//count the number of wins for each player
//display the high scores on the page # - text()
