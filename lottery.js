const lotteryNum = ["101", "202", "303", "404", "505", "606", "707"];

//button click
var search = document.getElementById("btn");

search.addEventListener("click", function () {
  var winner = lotteryNum[Math.floor(Math.random() * lotteryNum.length)];
  document.getElementById("lotterywinner").innerHTML =
    "The winner is:" + winner;
  //to the console
  console.log("The winner is:" + winner);
  //to the popup
  document.getElementById("popup").innerHTML = winner;
  //color
  document.getElementById("lotterywinner").style.color = "red";
});
