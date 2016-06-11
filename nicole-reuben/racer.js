$(function() {
//put your js in here

function resetGame() {
  $('.player1 td').removeClass('active').first().addClass('active')
  $('.player2 td').removeClass('active').first().addClass('active')
}

function movePlayer(playerNumber) {

  var activeNode = $('.' + playerNumber + ' .active')
  activeNode.removeClass("active").next().addClass("active")

  function checkForWin() {
    if ( !activeNode.length ) {

      alert(playerNumber + ' wins!')
      resetGame()

    }
  }

  checkForWin()

}



  $(window).keydown(function(event) {

    if (event.keyCode === 81 ) {

      movePlayer('player1')

    } else if (event.keyCode === 80) {

      movePlayer('player2')

    }

  })


})




  //find the active cell for this player - $()
  //stop it being active - # removeClass()
  //find the cells neighbour # next()
  //make it active # addClass()
  //if I don't have a neighbour, create an alert saying game over # alert() if

  //bonus points
  //reset a game




  //count the number of wins for each player
  //display the high scores on the page # - text()
