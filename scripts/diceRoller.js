console.log( 'js sourced' );
// array to hold the history of rolls
var rolls =[];
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
  // display rolls
  showRolls();
}; // end funk
// roll die function
var rollDie = function( maxVal ){
  console.log( 'in rollDie:', maxVal );
  // math.random gives a value btwn 0 and 1
  // multiply that by maxVal to get a number in the given range
  // math.floor rounds down to nearest integer
  return Math.floor( Math.random() * maxVal ) + 1;
}; // end funk
// display rolls to DOM
var showRolls = function(){
  // clear div
  document.getElementById( 'outputDiv' ).innerHTML = "";
  // unordered list for the cards
  var outputList = document.createElement( 'ul' );
  // for each card add a list item
  for( var i=0; i < rolls.length; i++ ){
    var listItem = document.createElement( 'li' );
    var textnode = document.createTextNode( 'roll ' + i + ': ' + rolls[ i ].roll + ' out of ' + rolls[ i ].max );
    listItem.appendChild( textnode );
    outputList.appendChild( listItem );
  }
  document.getElementById( 'outputDiv' ).appendChild( outputList );
}; // end funk
