// create a div element called "div_0" and append it to the body
var div_0 = document.createElement("div");
div_0.id = "div_0";
document.body.appendChild(div_0);
// add a display:flex and justify-content:space-between to the div_0
div_0.style.display = "flex";
div_0.style.justifyContent = "space-between";
// create a button element called "button_0" and append it to the div_0. add textContent to the button
var button_0 = document.createElement("button");
button_0.id = "button_0";
button_0.textContent = "High Scores";
div_0.appendChild(button_0);
// create another button element called "backbtn" and append it to the div_0. add textContent to the button
var backbtn = document.createElement("button");
backbtn.id = "backbtn";
backbtn.textContent = "Back";
div_0.appendChild(backbtn);

// create a h4 element called "h4_0" and append it to the div_0. add textContent to the h4
var h4_0 = document.createElement("h4");
h4_0.id = "h4_0";
h4_0.textContent = "timer: 0";
div_0.appendChild(h4_0);

// create a div element called "div_1" and append it to the body
var div_1 = document.createElement("div");
div_1.id = "div_1";
document.body.appendChild(div_1);
div_1.setAttribute("style", "display: flex; justify-content: center;");

// create a form element called "startform" and append it to the div_1
var startform = document.createElement("form");
startform.id = "startform";
div_1.appendChild(startform);
startform.setAttribute(
  "style",
  "display: flex; flex-direction: column; flex-wrap:wrap; align-items: center; width: 50%;"
);

// create a h1 element called "h1_0" and append it to the startform. add textContent to the h1
var h1_0 = document.createElement("h1");
h1_0.id = "h1_0";
h1_0.textContent = "Welcome to the Code Quiz";
startform.appendChild(h1_0);
// create a p element called "p_0" and append it to the startform. add textContent to the p
var p_0 = document.createElement("p");
p_0.id = "p_0";
p_0.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startform.appendChild(p_0);
// create a button element called "startbtn" and append it to the startform. add textContent to the button
var startbtn = document.createElement("button");
startbtn.id = "startbtn";
startbtn.textContent = "Start Quiz";
startform.appendChild(startbtn);

// create a section element called "section_0" and append it to the div_1
var section_0 = document.createElement("section");
section_0.id = "section_0";
div_1.appendChild(section_0);
// create a form element called "form_0" and append it to the section_0
var form_0 = document.createElement("form");
form_0.id = "form_0";
section_0.appendChild(form_0);
form_0.setAttribute("style", "display: flex; flex-direction: column;");
// create a input element called "input_0" and append it to the form_0
var input_0 = document.createElement("input");
input_0.id = "input_0";
form_0.appendChild(input_0);
// create a button element called "button_1" and append it to the form_0. add textContent to the button
var button_1 = document.createElement("button");
button_1.id = "button_1";
button_1.textContent = "Save";
form_0.appendChild(button_1);

// create a form element called "form_1" and append it to the section_0
var form_1 = document.createElement("form");
form_1.id = "form_1";
section_0.appendChild(form_1);
form_1.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: flex-start;"
);

// create 4 more button elements called "button_2", "button_3", "button_4", "button_5" and append them to the form_1 and add textContent to the buttons answer1, answer2, answer3, answer4
var button_2 = document.createElement("button");
button_2.id = "button_2";
button_2.textContent = "answer1";
form_1.appendChild(button_2);
var button_3 = document.createElement("button");
button_3.id = "button_3";
button_3.textContent = "answer2";
form_1.appendChild(button_3);
var button_4 = document.createElement("button");
button_4.id = "button_4";
button_4.textContent = "answer3";
form_1.appendChild(button_4);
var button_5 = document.createElement("button");
button_5.id = "button_5";
button_5.textContent = "answer4";
form_1.appendChild(button_5);

var p_1 = document.createElement("p");
p_1.id = "p_1";
p_1.textContent = "Haha, I'm taunting you! I only belong on the quiz page!";
form_1.appendChild(p_1);
p_1.setAttribute("style", "border-top: 1px solid lightgrey; color: lightgrey;");

// create a form element called "form_2" and append it to the section_0
// create two more button elements and append them to the form_2  and add textContent to the buttons "clear" and "retake quiz"
var form_2 = document.createElement("form");
form_2.id = "form_2";
section_0.appendChild(form_2);
form_2.setAttribute("style", "display: flex; flex-direction: column;");
var button_6 = document.createElement("button");
button_6.id = "button_6";
button_6.textContent = "clear";
form_2.appendChild(button_6);
var button_7 = document.createElement("button");
button_7.id = "button_7";
button_7.textContent = "retake quiz";
form_2.appendChild(button_7);

// create a div element called "div_2" and append it to the body
var div_2 = document.createElement("div");
div_2.id = "div_2";
document.body.appendChild(div_2);

var questions = [
  {
    question: "What is the capital of France?",
    answers: {
      Paris: "Right!",
      London: "Wrong!",
      Berlin: "Wrong!",
      Rome: "Wrong!",
    },
  },
  {
    question: "What is the capital of Germany?",
    answers: {
      Paris: "Wrong!",
      London: "Wrong!",
      Berlin: "Right!",
      Rome: "Wrong!",
    },
  },
  {
    question: "What is the capital of Italy?",
    answers: {
      Paris: "Wrong!",
      London: "Wrong!",
      Berlin: "Wrong!",
      Rome: "Right!",
    },
  },
  {
    question: "What is the capital of England?",
    answers: {
      Paris: "Wrong!",
      London: "Right!",
      Berlin: "Wrong!",
      Rome: "Wrong!",
    },
  },
];
// create a variable called "questionIndex" and set it to 0
var questionIndex = 0;
// create a variable called "score" and set it to 0
var score = 0;
// create a variable called "time" and set it to 60
var time = 60;
// create a variable called "timer" and set it to null
var timer = null;
// create a variable called "highscores" and set it to an empty array
var highscores = [];

// create a function called "startQuiz" that takes no parameters
function startQuiz() {
  //set the textContent of the h1_0 to "questions[questionIndex].question"
  // h1_0.textContent = questions[questionIndex].question;
  //set the textContent of button_2 to Object.keys(questions[questionIndex].answers)[0]
  button_2.textContent = Object.keys(questions[questionIndex].answers)[0];
  //set the textContent of button_3 to Object.keys(questions[questionIndex].answers)[1]
  button_3.textContent = Object.keys(questions[questionIndex].answers)[1];
  //set the textContent of button_4 to Object.keys(questions[questionIndex].answers)[2]
  button_4.textContent = Object.keys(questions[questionIndex].answers)[2];
  //set the textContent of button_5 to Object.keys(questions[questionIndex].answers)[3]
  button_5.textContent = Object.keys(questions[questionIndex].answers)[3];
}
// style all buttons to have a background color of slateblue, a color of white, a border of 1px solid black, a border radius of 5px, a font size of 20px, a font family of sans-serif, a font weight of bold, a padding of 10px, a margin of 10px, and a cursor of pointer
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = "#5e3d92";
  buttons[i].style.color = "white";
  buttons[i].style.border = "1px solid slateblue";
  buttons[i].style.borderRadius = "10px";
  buttons[i].style.fontSize = "20px";
  buttons[i].style.fontFamily = "'Times New Roman', Times, serif";
  buttons[i].style.padding = "0px 10px";
  buttons[i].style.margin = "2px";
  buttons[i].style.cursor = "pointer";
}
// make all buttons have a hover effect that changes the background color to lavender and the color to slateblue
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "lavender";
    this.style.color = "#5e3d92";
  });
}
// make all buttons have a mouseout effect that changes the background color to slateblue and the color to white
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "#5e3d92";
    this.style.color = "white";
  });
}

// create event listeners for all elements that console.log the element's id and textContent
var elements = document.querySelectorAll("body *");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    console.log(this.id, this.textContent);
    event.stopPropagation();
    event.preventDefault();
  });
}

// in the beginning, show startform, hide form_0, form_1, and form_2
startform.style.display = "flex";
backbtn.style.display = "none";
form_0.style.display = "none";
form_1.style.display = "none";
form_2.style.display = "none";

// create event listener for startbtn that hides startform and shows form_1
startbtn.addEventListener("click", function () {
  backbtn.style.display = "block";
  startform.style.display = "none";
  form_1.style.display = "flex";
  startQuiz();
});

// create event listener for button_0 that hides startform and shows form_2
button_0.addEventListener("click", function () {
  backbtn.style.display = "flex";
  startform.style.display = "none";
  form_2.style.display = "flex";
  form_1.style.display = "none";
});

// create event listener for backbtn that shows startform, hide form_0, form_1, and form_2
backbtn.addEventListener("click", function () {
  startform.style.display = "flex";
  backbtn.style.display = "none";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
});
// create event listener for button_2 through button_5 that shows form_0 and hides form_1

button_2.addEventListener("click", function () {
  backbtn.style.display = "flex";
  form_0.style.display = "flex";
  form_1.style.display = "none";
});
button_3.addEventListener("click", function () {
  backbtn.style.display = "flex";
  form_0.style.display = "flex";
  form_1.style.display = "none";
});
button_4.addEventListener("click", function () {
  backbtn.style.display = "flex";
  form_0.style.display = "flex";
  form_1.style.display = "none";
});
button_5.addEventListener("click", function () {
  backbtn.style.display = "flex";
  form_0.style.display = "flex";
  form_1.style.display = "none";
});

// create event listener for button_1 that hides form_0 and shows form_2
button_1.addEventListener("click", function () {
  backbtn.style.display = "flex";
  form_0.style.display = "none";
  form_2.style.display = "flex";
});

// create event listener for button_6 and button_7 that shows startform, hide form_0, form_1, and form_2
button_6.addEventListener("click", function () {
  backbtn.style.display = "none";
  startform.style.display = "flex";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
});
button_7.addEventListener("click", function () {
  backbtn.style.display = "none";
  startform.style.display = "flex";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
});
