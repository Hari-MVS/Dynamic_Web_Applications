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
  // arrayOfCarBrands
  let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));
  let list=[];
  for (let i of arrayOfCarBrands){
      if (i['country']==='India'){
          list.push(i['name'])
      }
  }
  console.log(list);
}
