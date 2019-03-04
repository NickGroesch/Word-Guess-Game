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
    "donald_trump_face"
  ];

  var compThinks = wordPool[Math.floor(Math.random() * wordPool.length)];
  console.log(compThinks);

  // variables for display elements
  var w = document.getElementById("wins");
  var l = document.getElementById("losses");
  var x = document.getElementById("guessleft");
  var g = document.getElementById("lettersguessed");
  var d = document.getElementById("display");
  var f = document.getElementById("feedback");

  // varaiables for gameplay
  var myWins = 0;
  var myLosses = 0;
  var guessesLeft = 9;
  var myLetter;
  var triedLetters = [];
  var inThere = [];
  var indexes = [];
  var displayWord = [];
  w.innerText = myWins;
  l.innerText = myLosses;

  function reset() {
    k = false;
    guessesLeft = 9;
    triedLetters = [];
    g.innerText = triedLetters.join();
    x.innerText = guessesLeft;
    displayWord = [];

    var compThinks = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(compThinks);
    workingWord = compThinks.split("");
    displayIt();
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
  function displayIt() {
    for (i = 0; i < workingWord.length; i++) {
      if (workingWord[i] != "_") {
        displayWord.push("#");
      } else {
        displayWord.push("_");
      }
    }
    d.innerText = displayWord.join("");
  }
  displayIt();
  //   keyupevent
  document.onkeyup = function(event) {
    // input validator
    var myAscii = event.keyCode;
    if (myAscii <= 90 && myAscii >= 65) {
      myAscii = myAscii + 32;
    }

    if (!(myAscii == 16) && !(myAscii >= 97 && myAscii <= 122)) {
      f.innerText = "We only accept letters in hangman!";
    }
    // check if myLetter is in compThinks
    myLetter = String.fromCharCode(myAscii);
    inThere = polyIndex(workingWord, myLetter);
    // do the thing
    if (inThere != -1) {
      for (i = 0; i < inThere.length; i++) {
        z = inThere[i];
        console.log(z);

        displayWord[z] = workingWord[z];
        d.innerText = displayWord.join("");
        // not working below
        if (displayWord == workingWord) {
          myWins++;
          w.innerHTML = myWins;
          f.innerHTML = "you win, play again";
          reset();
        }
      }
    } else if (inThere == -1) {
      guessesLeft--;
      x.innerHTML = guessesLeft;
      triedLetters.push(myLetter);
      g.innerText = triedLetters;
      if (guessesLeft == 0) {
        myLosses++;
        l.innerHTML = myLosses;
        f.innerHTML = "you lose, try again";
        reset();
      }
    }

    // reset indexes
    indexes = [];
  };

  //docready closure below
});
