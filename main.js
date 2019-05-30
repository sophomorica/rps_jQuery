$(document).ready(function() {
  var rock = $("#rock");
  var paper = $("#paper");
  var scissors = $("#scissors");
  var arr = ["rock", "paper", "scissors"];

  
  $("#lock_in").on("click", function() {
    var compChoice = arr[Math.floor(Math.random() * arr.length)];
    console.log(compChoice);
    var choices = $("#choices");
    var choice = choices.val();
    var userBox = $("#user_choice");
    var compBox = $("#comp_choice");
    if (userBox.text() !== choice) {
      userBox.append('<h1 class = "view_choice">' + choice + "</h1>");
    }
    compBox.append('<h1 class = "view_choice">' + compChoice + "</h1>");
    debugger
    switch (true) {
      case choice === compChoice:
        alert("you tie");
        break;
      case choice === "rock" && compChoice === "scissors":
        alert("win");
        break;
      case choice === "rock" && compChoice === "paper":
        alert("lose")
        break;
      case choice === "paper" && compChoice === "scissors":
        alert("lose")
        break;
      case choice === "paper" && compChoice === "rock":
        alert("win");
        break;
      case choice === "scissors" && compChoice === "paper":
        alert("win");
        break;
      case choice === "scissors" && compChoice === "rock":
        alert("lose")
        break;
    }
  });
});
