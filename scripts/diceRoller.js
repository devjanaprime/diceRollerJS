console.log( 'js sourced' );
// array to hold the history of rolls
var rolls =[];
// roll die function
var rollDie = function( maxVal ){
  console.log( 'in rollDie:', maxVal );
  // math.random gives a value btwn 0 and 1
  // multiply that by maxVal to get a number in the given range
  // math.floor rounds down to nearest integer
  return Math.floor( Math.random() * maxVal ) + 1;
}
// make roll function
var makeRoll = function(){
  // get user input from select
  var maxRoll = document.getElementById('dieMax').value;
  // make roll
  var rollValue = rollDie( maxRoll );
  // save info in a newRoll object
  var newRoll = {
    max: maxRoll,
    roll: rollValue
  }
  // push it into the rolls array
  rolls.push( newRoll );
  // log it out
  console.log( rolls );
}
