var questions = [
  //Start 1 of 10 Power Rangers Trivia Questions//
  {
    question: "In What Year Did Mighty Morphin Power Ranger Debut in the US?",
    optionA: "1998",
    optionB: "1990",
    optionC: "1987",
    optionD: "1993",
    anwser: "D",
    image: "images/q1.png"
  },
  {
    question: "What What Were the Colors of the Original Ranger Team?",
    optionA: "Pink, Yellow, Green, Blue & White",
    optionB: "Red, White, Pink, Orange& Green",
    optionC: "Red, Blue, Pink, Black  & Yellow",
    optionD: "Black, Blue, Purple, Green, & red",
    anwser: "C",
    image: "images/q2.png"
  },
  {
    question: "What is the Name of the Green Ranger?",
    optionA: "Tommy Greene",
    optionB: "Tommy Oliver",
    optionC: "Tom Collins",
    optionD: "Jason Weaver",
    anwser: "B",
    image: "images/q3.png"
  },
  {
    question: "Who was the 1st Yellow Ranger?",
    optionA: "Aisha Campbell",
    optionB: "Trini Quan",
    optionC: "Kimberly Hart",
    optionD: "Katherine Hillard",
    anwser: "B",
    image: "images/q4.png"
  },
  {
    question: "In which season did the Rangers get their Ninja Powers?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "C",
    image: "images/q5.png"
  },
  {
    question: "Who Gave The Rangers Ninja Powers?",
    optionA: "Alpha 5",
    optionB: "Zordon",
    optionC: "Lerigot",
    optionD: "Ninjor",
    anwser: "D",
    image: "images/q6.png"
  },
  {
    question: "In which seaon was the Command Center destroyed?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "C",
    image:"images/q7.png"
  },
  {
    question: "In Which Season does Lord Zedd Appear?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "B",
    image: "images/q8.png"
  },
  {
    question: "What is the Name of  Tommys Talking Sword?",
    optionA: "Dragon Dagger",
    optionB: "Saba",
    optionC: "Power Sword",
    optionD: "Power Blaster",
    anwser: "B",
    image: "images/q9.png"
  },
  {
    question: "Which Ranger was able to defeate Tommy, the Green Ranger?",
    optionA: "Jason, the Red Ranger",
    optionB: "Rocky, the Red Ranger",
    optionC: "Kimberly, The Pink Ranger",
    optionD: "Zack, the Black Ranger",
    anwser: "",
    image: "images/q10.png"
  }
];
//end of 10 Power Rangers Trivia Questions//


var questCounter = questions.length;
var score = 0;
var quesPosition = 0;

var container = document.getElementById("container");
var prQuestion = document.getElementById("prQuestion");
var headImg = document.getElementById("headImg");
var opA = document.getElementById("opA");
var opB = document.getElementById("opB");
var opC = document.getElementById("opC");
var opD = document.getElementById("opD");
var butNext = document.getElementById("butNext");
var correctAnswer = document.getElementById("correctAnwser");

function loadPrQuest(index) {
  var quest = questions[index];
  prQuestion.textContent = index + 1 + ". " + quest.question;
  opA.textContent = quest.optionA;
  opB.textContent = quest.optionB;
  opC.textContent = quest.optionC;
  opD.textContent = quest.optionD;
  headImg.src = quest.image;
  // correctAnswer.textContent = quest.anwser;
}

function loadPrTrivia() {
  var selected = document.querySelector("input[type=radio]:checked");
  if (!selected) {
    alert("Please Anser or Morphin' Grid will Break!!");
    return;
  }
  var anwser = selected.value;

  if (questions[quesPosition].anwser == anwser) {
    score +=10;
  }
  selected.checked = false;
  quesPosition++;
  if (quesPosition == questCounter - 1) {
    //end of Triva changes button Text to Finished/Morphin Time//
    butNext.textContent = "Its Morphin' Time";

  }
  // alert(quesPosition)
  else if (quesPosition == questCounter) {
    butNext.textContent = "Its Morphin' Time,  Your Score: " + score + "points";
    container.style.display = 'none';
    correctAnswer.style.display = "";
    correctAnswer.textContent = "Ranger Score: " + score;
    return;

  }
  loadPrQuest(quesPosition);
}
loadPrQuest(quesPosition);
