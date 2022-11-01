var scoreObjectString = localStorage.getItem("scoreObject");

  var score = 0;
  var initials = "";
  try {
  scoreObject = JSON.parse(scoreObjectString);
  var scoreObject = JSON.parse(scoreObjectString);
  // create a variable that gets the value of the scoreObject's score key
  var scoreObjectScore = scoreObject.score;
  // create a variable that gets the value of the scoreObject's initials key
  var scoreObjectInitials = scoreObject.initials;
  // create a variable that gets the value of the scoreObject's score key and converts it to a string
  var scoreObjectScoreString = scoreObjectScore.toString();
  // create a variable that gets the value of the scoreObject's initials key and converts it to a string
  var scoreObjectInitialsString = scoreObjectInitials.toString();
  // create a variable that gets the value of the scoreObject's score key and converts it to a string and adds a space
  var scoreObjectScoreStringSpace = scoreObjectScoreString + " ";
  // create a variable that gets the value of the scoreObject's initials key and converts it to a string and adds a space
  var scoreObjectInitialsStringSpace = scoreObjectInitialsString + " ";
  // add the value of the scoreObject's initials key and score key to the next row of table_0 element while keeping the previous rows. the initial and score should be on the same row but on different columns
  } catch(error) {
  // if there is no scoreObjectString, then set the scoreObjectScoreStringSpace and scoreObjectInitialsStringSpace to empty strings
  var scoreObjectScoreStringSpace = "";
  var scoreObjectInitialsStringSpace = "";
  } 




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
button_0.setAttribute(
  "style",
  "display: flex; align-items: center; justify-content: center; border: 1px solid white; background-color: white; color:black;"
);
// create another button element called "backbtn" and append it to the div_0. add textContent to the button
var backbtn = document.createElement("button");
backbtn.id = "backbtn";
backbtn.textContent = "Back";
div_0.appendChild(backbtn);
backbtn.setAttribute(
  "style",
  "display: flex; align-items: center; justify-content: center; border: 1px solid white; background-color: white; color:black;"
);

// create a h4 element called "h4_0" and append it to the div_0. add textContent to the h4
var h4_0 = document.createElement("h4");
h4_0.id = "h4_0";
h4_0.textContent = "timer: 0";
div_0.appendChild(h4_0);
h4_0.setAttribute(
  "style",
  "display: flex; justify-content: flex-end; width:30vw;)"
);

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
// create a h2 element called "h2_0" and append it to the form_0. add textContent to the h2 showing the current score and asking if the user wants to save their score and type their initials
var h2_0 = document.createElement("h2");
h2_0.id = "h2_0";
h2_0.textContent = "Score: ";
form_0.appendChild(h2_0);

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
var h1_1 = document.createElement("h1");
h1_1.id = "h1_1";
h1_1.textContent = "Question";
form_1.appendChild(h1_1);
h1_1.setAttribute(
  "style",
  "display: flex; flex-wrap:wrap; justify-content: center;"
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
form_1.appendChild(p_1);
p_1.setAttribute(
  "style",
  "border-top: 1px solid lightgrey; width: 100%; color: grey;"
);

// create a form element called "form_2" and append it to the section_0
// create two more button elements and append them to the form_2  and add textContent to the buttons "clear" and "retake quiz"
var form_2 = document.createElement("form");
form_2.id = "form_2";
section_0.appendChild(form_2);
form_2.setAttribute(
  "style",
  "display: flex; flex-direction: column; width: 40vw; justify-content: center;"
);
// create a table element called "table_0" and append it to the form_2 it will be used to display the high scores and initials
var table_0 = document.createElement("table");
table_0.id = "table_0";
form_2.appendChild(table_0);
table_0.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; width: 100%; min-height: 40vh;"
);
table_0.innerHTML = "<tr><th>Initials</th><th>Score</th></tr>";
table_0.innerHTML +=
"<tr><td>" +
scoreObjectInitialsStringSpace +
"</td><td>" +
scoreObjectScoreStringSpace +
"</td></tr>";

// table_0 will have two colums, one for the initials and one for the score
var tr_0 = document.createElement("tr");
tr_0.id = "tr_0";
table_0.appendChild(tr_0);
var th_0 = document.createElement("th");
th_0.id = "th_0";
// th_0.textContent = "Initials";
tr_0.appendChild(th_0);
var th_1 = document.createElement("th");
th_1.id = "th_1";
// th_1.textContent = "Score";
tr_0.appendChild(th_1);
// append div to form_2
var div_2 = document.createElement("div");
div_2.id = "div_2";
form_2.appendChild(div_2);
div_2.setAttribute(
  "style",
  "display: flex; flex-direction: row; align-items: center; justify-content: center; width: 100%;"
);
var button_6 = document.createElement("button");
button_6.id = "button_6";
button_6.textContent = "clear";
div_2.appendChild(button_6);
var button_7 = document.createElement("button");
button_7.id = "button_7";
button_7.textContent = "retake quiz";
div_2.appendChild(button_7);

// create a div element called "div_2" and append it to the body
var div_2 = document.createElement("div");
div_2.id = "div_2";
document.body.appendChild(div_2);
function setQuestionArray() {
  var questions = [
    {
      question: "Arrays can be used to store ____?",
      answers: {
        "Numbers and strings": "Wrong!",
        Brackets: "Wrong!",
        "Other Arrays": "Wrong!",
        "All of the above.": "Right!",
      },
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        "The Terminal": "Wrong!",
        Brackets: "Wrong!",
        "The console.log() function!": "Right!",
        "The confirm() function!": "Wrong!",
      },
    },
    {
      question: "Strings are enclosed within what?",
      answers: {
        Sandwiches: "Wrong!",
        Semicolons: "Wrong!",
        Parenthesis: "Wrong!",
        "Quotation marks": "Right!",
      },
    },
    {
      question:
        "The condition in an if/else statement is enclosed within ____?",
      answers: {
        "Quotation marks": "Wrong!",
        Parentheses: "Right!",
        "Curlyy Brackets": "Wrong!",
        Hyphens: "Wrong!",
      },
    },
  ];
  return questions;
}
var questions = setQuestionArray();
// create a variable called "questionIndex" and set it to 0
var questionIndex = Math.floor(Math.random() * questions.length);
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
  //set the textContent of the h1_1 to "questions[questionIndex].question"
  h1_1.textContent = questions[questionIndex].question;
  //set the textContent of button_2 to Object.keys(questions[questionIndex].answers)[0]
  button_2.textContent = Object.keys(questions[questionIndex].answers)[0];
  //set the textContent of button_3 to Object.keys(questions[questionIndex].answers)[1]
  button_3.textContent = Object.keys(questions[questionIndex].answers)[1];
  //set the textContent of button_4 to Object.keys(questions[questionIndex].answers)[2]
  button_4.textContent = Object.keys(questions[questionIndex].answers)[2];
  //set the textContent of button_5 to Object.keys(questions[questionIndex].answers)[3]
  button_5.textContent = Object.keys(questions[questionIndex].answers)[3];
  //set the textContent of h4_0 to "Time: " + time
  h4_0.textContent = "Time: " + time;
  //set the textContent of p_1 to "Score: " + score
  // p_1.textContent = "Score: " + score;
}
// style all buttons except button_0 and backbtn to have a background color of slateblue, a color of white, a border of 1px solid black, a border radius of 5px, a font size of 20px, a font family of sans-serif, a font weight of bold, a padding of 10px, a margin of 10px, and a cursor of pointer
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id !== "button_0" && buttons[i].id !== "backbtn") {
    buttons[i].setAttribute(
      "style",
      "background-color: #5e3d92; color: white; border: 1px solid #5e3d92; border-radius: 5px; max-width: fit-content; font-size: 15px; font-family: sans-serif; font-weight: bold; padding: 0px 10px; margin: 5px; cursor: pointer;"
    );
  }
}
// make all buttons have a hover effect that changes the background color to lavender and the color to slateblue
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id !== "button_0" && buttons[i].id !== "backbtn") {
    buttons[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "lavender";
      this.style.color = "#5e3d92";
    });
  }
}
// make all buttons have a mouseout effect that changes the background color to slateblue and the color to white
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].id !== "button_0" && buttons[i].id !== "backbtn") {
    buttons[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "#5e3d92";
      this.style.color = "white";
    });
  }
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
h4_0.textContent = "Get Ready!";
startform.style.display = "flex";
backbtn.style.display = "none";
form_0.style.display = "none";
form_1.style.display = "none";
form_2.style.display = "none";
button_0.style.display = "flex";

// create event listener for startbtn that hides startform and shows form_1
startbtn.addEventListener("click", function () {
  questions = setQuestionArray();
  p_1.textContent = "";
  backbtn.style.display = "flex";
  startform.style.display = "none";
  form_1.style.display = "flex";
  button_0.style.display = "flex";

  var timer = setInterval(function () {
    time--;
    h4_0.textContent = "Time: " + time;
    if (time <= 0) {
      clearInterval(timer);
      h4_0.textContent = "Time's up!";
      button_0.style.display = "none";
      backbtn.style.display = "flex";
      form_0.style.display = "flex";
      form_2.style.display = "none";
      form_1.style.display = "none";
      h2_0.textContent = "Score: " + score + " Do you want to save your score?";
    }
  }, 1000);

  startQuiz();
});

// create event listener for button_0 that hides startform and shows form_2
button_0.addEventListener("click", function () {
  time = 60;
  backbtn.style.display = "flex";
  startform.style.display = "none";
  form_2.style.display = "flex";
  form_1.style.display = "none";
  button_0.style.display = "none";
});

// create event listener for backbtn that shows startform, hide form_0, form_1, and form_2
backbtn.addEventListener("click", function () {
  time = 60;
  score = 0;
  h4_0.textContent =
    "Are you guys ready to give up or are you thirsty for more?";
  startform.style.display = "flex";
  backbtn.style.display = "none";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
  button_0.style.display = "flex";
});
// create event listener for button_2 through button_5 that shows form_0 and hides form_1 and updates p_1 to show whether the questions array at questionIndex's answers object's key of the button's textContent is "Right!" or "Wrong!"

button_2.addEventListener("click", function () {
  p_1.textContent = questions[questionIndex].answers[button_2.textContent];
  if (questions[questionIndex].answers[button_2.textContent] === "Right!") {
    score += 10;
  } else if (time <= 10) {
    time = 0;
  } else {
    time -= 10;
  }
  // create transition effect for h1_1 to change the color to #5e3d92 for 1 second
  h1_1.style.color = "#5e3d92";
  setTimeout(function () {
    h1_1.style.color = "black";
  }, 300);
  // delete the element at index questionIndex of the questions array
  questions.splice(questionIndex, 1);
  // if the questions array is empty, show form_0 and hide form_1
  if (questions.length === 0) {
    clearInterval(timer);
    h4_0.textContent = "All done!";
    time = 0;
    button_0.style.display = "none";
    backbtn.style.display = "flex";
    form_0.style.display = "flex";
    form_2.style.display = "none";
    form_1.style.display = "none";
    h2_0.textContent = "Score: " + score + " Do you want to save your score?";
  }
  questionIndex = Math.floor(Math.random() * questions.length);
  startQuiz();
});
button_3.addEventListener("click", function () {
  p_1.textContent = questions[questionIndex].answers[button_3.textContent];
  if (questions[questionIndex].answers[button_3.textContent] === "Right!") {
    score += 10;
  } else if (time <= 10) {
    time = 0;
  } else {
    time -= 10;
  }
  // create transition effect for h1_1 to change the color to #5e3d92 for 1 second
  h1_1.style.color = "#5e3d92";
  setTimeout(function () {
    h1_1.style.color = "black";
  }, 300);
  // delete the element at index questionIndex of the questions array
  questions.splice(questionIndex, 1);
  // if the questions array is empty, show form_0 and hide form_1
  if (questions.length === 0) {
    clearInterval(timer);
    h4_0.textContent = "All done!";
    time = 0;
    button_0.style.display = "none";
    backbtn.style.display = "flex";
    form_0.style.display = "flex";
    form_2.style.display = "none";
    form_1.style.display = "none";
    h2_0.textContent = "Score: " + score + " Do you want to save your score?";
  }
  questionIndex = Math.floor(Math.random() * questions.length);
  startQuiz();
});
button_4.addEventListener("click", function () {
  p_1.textContent = questions[questionIndex].answers[button_4.textContent];
  if (questions[questionIndex].answers[button_4.textContent] === "Right!") {
    score += 10;
  } else if (time <= 10) {
    time = 0;
  } else {
    time -= 10;
  }
  // create transition effect for h1_1 to change the color to #5e3d92 for 1 second
  h1_1.style.color = "#5e3d92";
  setTimeout(function () {
    h1_1.style.color = "black";
  }, 300);
  // delete the element at index questionIndex of the questions array
  questions.splice(questionIndex, 1);
  // if the questions array is empty, show form_0 and hide form_1
  if (questions.length === 0) {
    clearInterval(timer);
    h4_0.textContent = "All done!";
    time = 0;
    button_0.style.display = "none";
    backbtn.style.display = "flex";
    form_0.style.display = "flex";
    form_2.style.display = "none";
    form_1.style.display = "none";
    h2_0.textContent = "Score: " + score + " Do you want to save your score?";
  }
  questionIndex = Math.floor(Math.random() * questions.length);
  startQuiz();
});
button_5.addEventListener("click", function () {
  p_1.textContent = questions[questionIndex].answers[button_5.textContent];
  if (questions[questionIndex].answers[button_5.textContent] === "Right!") {
    score += 10;
  } else if (time <= 10) {
    time = 0;
  } else {
    time -= 10;
  }
  // create transition effect for h1_1 to change the color to #5e3d92 for 1 second
  h1_1.style.color = "#5e3d92";
  setTimeout(function () {
    h1_1.style.color = "black";
  }, 300);
  // delete the element at index questionIndex of the questions array
  questions.splice(questionIndex, 1);
  // if the questions array is empty, show form_0 and hide form_1
  if (questions.length === 0) {
    clearInterval(timer);
    h4_0.textContent = "All done!";
    time = 0;
    button_0.style.display = "none";
    backbtn.style.display = "flex";
    form_0.style.display = "flex";
    form_2.style.display = "none";
    form_1.style.display = "none";
    h2_0.textContent = "Score: " + score + " Do you want to save your score?";
  }
  questionIndex = Math.floor(Math.random() * questions.length);
  startQuiz();
});

// create event listener for button_1 that hides form_0 and shows form_2
button_1.addEventListener("click", function () {
  time = 60;
  backbtn.style.display = "flex";
  form_0.style.display = "none";
  form_2.style.display = "flex";
  button_0.style.display = "none";
  // turn value of input_0 into a variable, then json stringify it with score and set it to local storage
  var initials = input_0.value;
  console.log(initials + " " + score);

  var scoreObject = {
    initials: initials,
    score: score,
  };
  console.log(scoreObject);
  var scoreObjectString = JSON.stringify(scoreObject);
  console.log(scoreObjectString);
  localStorage.setItem("scoreObject", scoreObjectString);

  // create a variable that gets the value of local storage and json parse it
  var scoreObjectString = localStorage.getItem("scoreObject");
  var scoreObject = JSON.parse(scoreObjectString);
  // create a variable that gets the value of the scoreObject's score key
  var scoreObjectScore = scoreObject.score;
  // create a variable that gets the value of the scoreObject's initials key
  var scoreObjectInitials = scoreObject.initials;
  // create a variable that gets the value of the scoreObject's score key and converts it to a string
  var scoreObjectScoreString = scoreObjectScore.toString();
  // create a variable that gets the value of the scoreObject's initials key and converts it to a string
  var scoreObjectInitialsString = scoreObjectInitials.toString();
  // create a variable that gets the value of the scoreObject's score key and converts it to a string and adds a space
  var scoreObjectScoreStringSpace = scoreObjectScoreString + " ";
  // create a variable that gets the value of the scoreObject's initials key and converts it to a string and adds a space
  var scoreObjectInitialsStringSpace = scoreObjectInitialsString + " ";
  // add the value of the scoreObject's initials key and score key to the next row of table_0 element while keeping the previous rows. the initial and score should be on the same row but on different columns
  table_0.innerHTML +=
    "<tr><td>" +
    scoreObjectInitialsStringSpace +
    "</td><td>" +
    scoreObjectScoreStringSpace +
    "</td></tr>";
});

// create event listener for button_6 and button_7 that shows startform, hide form_0, form_1, and form_2
button_6.addEventListener("click", function () {
  time = 60;
  score = 0;
  h4_0.textContent =
    "Are you guys ready to give up or are you thirsty for more?";
  backbtn.style.display = "none";
  startform.style.display = "flex";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
  button_0.style.display = "flex";
  // clear local storage
  localStorage.clear();
  // clear rows of table_0 element but not the first row
  table_0.innerHTML = "<tr><th>Initials</th><th>Score</th></tr>";
});
button_7.addEventListener("click", function () {
  time = 60;
  score = 0;
  h4_0.textContent =
    "Are you guys ready to give up or are you thirsty for more?";
  backbtn.style.display = "none";
  startform.style.display = "flex";
  form_0.style.display = "none";
  form_1.style.display = "none";
  form_2.style.display = "none";
  button_0.style.display = "flex";
});
