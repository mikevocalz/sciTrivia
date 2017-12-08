var questions = [
  //Start 1 of 10 Power Rangers Trivia Questions//
  {
    question: "In What Year Did Mighty Morphin Power Ranger Debut in the US?",
    optionA: "1998",
    optionB: "1990",
    optionC: "1987",
    optionD: "1993",
    anwser: "4",
    image: "images/q1.png"
  },
  {
    question: "What Were the Colors of the Original Ranger Team?",
    optionA: "Pink, Yellow, Green, Blue & White",
    optionB: "Red, White, Pink, Orange& Green",
    optionC: "Red, Blue, Pink, Black  & Yellow",
    optionD: "Black, Blue, Purple, Green, & red",
    anwser: "3",
    image: "images/q2.png"
  },
  {
    question: "What is the Name of the Green Ranger?",
    optionA: "Tommy Greene",
    optionB: "Tommy Oliver",
    optionC: "Tom Collins",
    optionD: "Jason Weaver",
    anwser: "2",
    image: "/images/q3.png"
  },
  {
    question: "Who was the 1st Yellow Ranger?",
    optionA: "Aisha Campbell",
    optionB: "Trini Quan",
    optionC: "Kimberly Hart",
    optionD: "Katherine Hillard",
    anwser: "2",
    image: "/images/q4.png"
  },
  {
    question: "In which season did the Rangers get their Ninja Powers?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "3",
    image: "/images/q5.png"
  },
  {
    question: "Who Gave The Rangers Ninja Powers?",
    optionA: "Alpha 5",
    optionB: "Zordon",
    optionC: "Lerigot",
    optionD: "Ninjor",
    anwser: "4",
    image: "/images/q6.png"
  },
  {
    question: "In which seaon was the Command Center destroyed?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "3",
    image:"/images/q7.png"
  },
  {
    question: "In Which Season does Lord Zedd Appear?",
    optionA: "Seaon 1",
    optionB: "Season 2",
    optionC: "Season 3",
    optionD: "Season 4",
    anwser: "2",
    image: "/images/q8.png"
  },
  {
    question: "What is the Name of  Tommys Talking Sword?",
    optionA: "Dragon Dagger",
    optionB: "Saba",
    optionC: "Power Sword",
    optionD: "Power Blaster",
    anwser: "2",
    image: "/images/q9.png"
  },
  {
    question: "Which Ranger was able to defeate Tommy, the Green Ranger?",
    optionA: "Jason, the Red Ranger",
    optionB: "Rocky, the Red Ranger",
    optionC: "Kimberly, The Pink Ranger",
    optionD: "Zack, the Black Ranger",
    anwser: "1",
    image: "/images/q10.png"
  }
];
//end of 10 Power Rangers Trivia Questions//

var quesPosition = 0;
var score = 60;
var questCounter = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var headImg = document.getElementById("headImg");
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('score');

function loadQuestion (rangerQuestion) {
	var quest = questions[rangerQuestion];
	questionEl.textContent = (rangerQuestion + 1) + '. ' + quest.question;
	op1.textContent = quest.optionA;
	op2.textContent = quest.optionB;
	op3.textContent = quest.optionC;
  op4.textContent = quest.optionD;
  headImg.src = quest.image;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert("Please Anser or the Morphin' Grid will Break!");
		return;
	}
	var answer = selectedOption.value;
	if(questions[quesPosition].answer == answer){
		score ++;
	}
	selectedOption.checked = false;
	quesPosition++;
	if(quesPosition == questCounter - 1){
		nextButton.textContent = "Its Morphin' Time";
	}
	if(quesPosition == questCounter){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Score: ' + score;
		return;
	}
	loadQuestion(quesPosition);
}

loadQuestion(quesPosition);