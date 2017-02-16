// firstReverse

var firstReverse = function (str) {
  return str.split(" ").reverse().join(" ");
}

console.log(firstReverse("Hello World"));

// swapCase
var swapCase = function (str) {
  arr = str.split("");
  console.log (arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      console.log (arr[i].toLowerCase());
    } else {
      console.log (arr[i].toUpperCase());
    }
    //console.log (arr[i])
  }
}

swapCase("Hello World");
