document.addEventListener("DOMContentLoaded", function() {
  var wordPool = [
    "oranges",
    "cheese_puffs",
    "traffic_cones",
    "sherbert",
    "julius",
    "william_of",
    "embers",
    "crush",
    "burnt",
    "slices",
    "mac_and_cheese",
    "donald_trumpface"
  ];

  var compThinks = wordPool[Math.floor(Math.random() * wordPool.length)];
  console.log(compThinks);

  // variables for display elements
  var w = document.getElementById("wins");
  var l = document.getElementById("losses");
  var x = document.getElementById("guessleft");
  var g = document.getElementById("lettersguessed");
  var f = document.getElementById("feedback");

  // varaiables for gameplay
  var myWins = 0;
  var myLosses = 0;
  var guessesLeft = 9;
  var myLetter;
  var triedLetters = [];
  var inThere = [];
  var indexes = [];
  //   k= 1 triggers reset
  var k = 0;
  w.innerText = myWins;
  l.innerText = myLosses;

  function reset() {
    guessesLeft = 9;
    triedLetters = [];
    k = false;
    g.innerText = triedLetters.join();
    x.innerText = guessesLeft;
  }
  function polyIndex(searchArray, letterValue) {
    for (var i = 0; i <= searchArray.length; i++) {
      if (searchArray[i] === letterValue) {
        indexes.push(i);
      } else if (i == searchArray.length && indexes.length == 0) {
        indexes.push(-1);
      }
    }
    return indexes;
  }
  var workingWord = compThinks.split("");
  // display spaces automatically and hide letters with dashes

  //   keyupevent
  document.onkeyup = function(event) {
    // input validator
    var myAscii = event.keyCode;
    if (myAscii <= 90 && myAscii >= 65) {
      myAscii = myAscii + 32;
    }
    if (!(myAscii >= 97 && myAscii <= 122)) {
      f.innerText = "We only accept letters in hangman!";
    }
    // check if myLetter is in compThinks
    myLetter = String.fromCharCode(myAscii);
    console.log(myLetter);
    inThere = polyIndex(workingWord, myLetter);
    console.log(inThere);
    // do the thing
    // reset indexes
    indexes = [];
  };

  //docready closure below
});
