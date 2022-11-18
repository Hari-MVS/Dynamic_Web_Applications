"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfFriends
  let arrayOfFriends = JSON.parse(readLine().replace(/'/g, '"'));

  function getPreferredGameMode(noOfFriends){
      if (noOfFriends.length <= 0){
          return 'Solo'
      }
      else if (noOfFriends.length === 1){
          return 'Dual'
      }
      else {
          return 'Squad'
      }
  }

  let gameMode = getPreferredGameMode(arrayOfFriends);
  console.log(gameMode);
}
