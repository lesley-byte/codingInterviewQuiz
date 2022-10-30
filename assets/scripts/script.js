var mode = "title";
// using document.createElement() to create a header
var div_actions = document.createElement("div");
// using document.createElement() to create a h4 element to put in the header
var h4 = document.createElement("h4");
// using document.createElement() to create another h4 element to put in the header
var h4_2 = document.createElement("button");
var h4_3 = document.createElement("button");
// using document.createElement() to create a h1 element
var h1 = document.createElement("h1");
var startButton = document.createElement("button");
// using document.createElement() to create a section element
var section = document.createElement("section");
// using document.createElement() to create a form element
var form = document.createElement("form");
// using document.createElement() to create a input element
var input = document.createElement("input");
// using document.createElement() to create  5 button elements
var button0 = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

// using object to store the questions and their 4 possible answers as well as which answers are corrent and which are wrong
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
console.log(questions[0].question);
console.log(Object.keys(questions[0].answers)[0]);
console.log(questions[0].answers.Paris);
//console.log how many questions are in the questions array
console.log(questions.length);
// create a function that loops through the questions array and displays the questions and their answers one at a time
// function displayQuestions() {
//   // create a for loop that loops through the questions array
//   for (var i = 0; i < questions.length; i++) {
//     // create a variable that stores the current question
//     var currentQuestion = questions[i];
//     // create a variable that stores the current question's answers
//     var currentAnswers = currentQuestion.answers;
//     // create a variable that stores the current question's answers as an array
//     var currentAnswersArray = Object.keys(currentAnswers);
//     // console.log the current question on one line and the current question's answers on the next line
//     console.log(currentQuestion.question);
//     console.log(currentAnswersArray);
//   }
// }
// displayQuestions();
// using document.createElement() to create a ul element
// using .textContent to add text to the h1 element
document.body.appendChild(div_actions);
// using .appendChild() to add the h4 element to the div_actions element
div_actions.appendChild(h4);
div_actions.appendChild(h4_2);
div_actions.appendChild(h4_3);

// using .appendChild() to add the section to the body element
document.body.appendChild(section);
// using .appendChild() to add the h1 to the body element
section.appendChild(h1);
section.appendChild(startButton);
// using .appendChild() to add the form to the section element
section.appendChild(form);
// using .appendChild() to add the input to the form element
form.appendChild(input);
// using .appendChild() to add the button4 to the form element
form.appendChild(button4);
// using .appendChild() to add the button to the form element
form.appendChild(button0);
// using .appendChild() to add the button1 to the form element
form.appendChild(button1);
// using .appendChild() to add the button2 to the form element
form.appendChild(button2);
// using .appendChild() to add the button3 to the form element
form.appendChild(button3);

// using .textContent to add text to the button element
// using .textContent to add text to the link element in the header

// using .textContent to add text to the h4 element in the header
h4.textContent = "Timer: 0";
// using .textContent to add text to the h4_2 element in the header
h4_2.textContent = "High Scores";

h4_3.textContent = "Back";

// create a function that randomly selects a question from the questions array
function randomQuestion() {
  // create a variable that stores a random number between 0 and the length of the questions array
  var random = Math.floor(Math.random() * questions.length);
  // create a variable that stores the question at the random index of the questions array
  h1.textContent = questions[random].question;
  button0.textContent = Object.keys(questions[random].answers)[0];
  button1.textContent = Object.keys(questions[random].answers)[1];
  button2.textContent = Object.keys(questions[random].answers)[2];
  button3.textContent = Object.keys(questions[random].answers)[3];
  // console.log the random question
  console.log(questions[random].question);
}

// using .textContent to add text to the button4 element
button4.textContent = "Save";

// setting the class attribute of all buttons to "btn"
button0.setAttribute("class", "btn");
button1.setAttribute("class", "btn");
button2.setAttribute("class", "btn");
button3.setAttribute("class", "btn");
button4.setAttribute("class", "btn");
// using .setAttribute() to add an id to the form element
form.setAttribute("id", "form");
// using .setAttribute() to add an id to the input element
input.setAttribute("id", "input");
// using .setAttribute() to add an id to the button element
button0.setAttribute("id", "button0");
// using .setAttribute() to add an id to the button1 element
button1.setAttribute("id", "button1");
// using .setAttribute() to add an id to the button2 element
button2.setAttribute("id", "button2");
// using .setAttribute() to add an id to the button3 element
button3.setAttribute("id", "button3");
// using .setAttribute() to add an id to the button4 element
button4.setAttribute("id", "button4");
//using .appendChile to add the header element to the body element
// using .setAttribute() to add style to the h1 element

function styleFirstPage() {
  mode = "first";
  randomQuestion();
  div_actions.setAttribute(
    "style",
    "display:flex; background-color: white; color: black; padding: 20px; text-align: center; flex-direction: row-reverse; width: 95%; justify-content: space-between; margin: 0 auto; border-radius: 5px; margin-bottom: 20px;"
  );
  // h1.textContent = "Quiz";
  h1.setAttribute(
    "style",
    "text-align:left; width: 100%; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
  );
  // using .setAttribute() to add style to the section element
  section.setAttribute(
    "style",
    "width: 50%; border-bottom: lightgrey 2px solid;margin-bottom: 10px; padding-bottom:10px; text-align:center; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif; display: flex; flex-direction: column; justify-content: center; align-items: center;"
  );
  // using .setAttribute() to add style to the form element
  form.setAttribute(
    "style",
    "text-align:center; width:100%; display:flex; flex-direction:column; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
  );
  // using .setAttribute() to add style to the input element
  input.setAttribute(
    "style",
    "text-align:center; color:blue; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
  );
  // using .setAttribute() to add style to the btn class.all btn class should be purple with white text
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.setAttribute(
      "style",
      "background-color:#5e3d92; border: #5e3d92 1px solid; color:white; margin:5px; border-radius:10px; font-size: 20px; font-family: 'Times New Roman', Times, serif;padding: 0px 10px; width: fit-content;"
    );
  });
  //use .setAttribute() to hide button4
  button4.setAttribute("style", "display:none");
  startButton.setAttribute("style", "display:none");
  // use .setAttribute() to hide the input element
  input.setAttribute("style", "display:none");
  h4.textContent = "Timer: 0";
  h4_2.setAttribute(
    "style",
    "background-color:white; display:visable; color:black; border:white; margin:0px; padding:0px; font-family: 'Times New Roman', Times, serif; font-weight: bold; font-size: 1em;"
  );
  h4_3.setAttribute("style", "display:none");
  // using .setAttribute() to add style to the body element
  document.body.setAttribute(
    "style",
    "background-color:white; display:flex; flex-direction:column; justify-content:center; align-items:center;"
  );

  //add an event listener to button, button1, button2, button3 to display the value of the answer key of the question object in the console
}

function styleSecondPage() {
  mode = "second";
  h1.textContent = "Save your score";
  h4_3.setAttribute(
    "style",
    "background-color:white; display:visable; color:black; border:white; margin:0px; padding:0px; font-family: 'Times New Roman', Times, serif; font-weight: bold;font-size: 1em;"
  );
  // use .setAttribute() to show the input element
  input.setAttribute("style", "display:visible");
  // use .setAttribute() to show the button4 element
  button4.setAttribute(
    "style",
    "display:visible; background-color:#5e3d92; border: #5e3d92 1px solid; color:white; margin:5px; border-radius:10px; font-size: 20px; font-family: 'Times New Roman', Times, serif;padding: 0px 10px; width: fit-content;"
  );
  startButton.setAttribute("style", "display:none");
  button0.setAttribute("style", "display:none; border: none");
  button1.setAttribute("style", "display:none");
  button2.setAttribute("style", "display:none");
  button3.setAttribute("style", "display:none");
  h4_2.setAttribute("style", "display:none; border:white");
  // use .setAttribute() to change the text of the button4 element to "Save"
  button4.textContent = "Save";
}

function styleTitlePage() {
  mode = "title";
  document.body.setAttribute(
    "style",
    "background-color:white; display:flex; flex-direction:column; justify-content:center; align-items:center;"
  );
  h4_2.setAttribute(
    "style",
    "background-color:white; display:visable; color:black; border:white; margin:0px; padding:0px; font-family: 'Times New Roman', Times, serif; font-weight: bold;font-size: 1em;"
  );
  div_actions.setAttribute(
    "style",
    "display:flex; background-color: white; color: black; padding: 20px; text-align: center; flex-direction: row-reverse; width: 95%; justify-content: space-between; margin: 0 auto; border-radius: 5px; margin-bottom: 20px;"
  );
  h1.textContent = "Quiz";
  startButton.textContent = "Start";
  startButton.setAttribute(
    "style",
    "background-color:#5e3d92; border: #5e3d92 1px solid; color:white; margin:5px; border-radius:10px; font-size: 20px; font-family: 'Times New Roman', Times, serif;padding: 0px 10px; width: fit-content; display:visable;"
  );
  h1.setAttribute(
    "style",
    "text-align:center; width: 100%; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
  );
  // using .setAttribute() to add style to the section element
  section.setAttribute(
    "style",
    "width: 50%; border-bottom: lightgrey 2px solid;margin-bottom: 10px; padding-bottom:10px; text-align:center; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif; display: flex; flex-direction: column; justify-content: center; align-items: center;"
  );
  form.setAttribute(
    "style",
    "text-align:center; width:100%; display:flex; flex-direction:column; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
  );

  //hide evertthing except h1
  // use .setAttribute() to hide the input element
  input.setAttribute("style", "display:none");
  // use .setAttribute() to hide the button4 element
  button4.setAttribute("style", "display:none");
  // use .setAttribute() to hide the button element
  button0.setAttribute("style", "display:none; border: none");
  // use .setAttribute() to hide the button1 element
  button1.setAttribute("style", "display:none");
  // use .setAttribute() to hide the button2 element
  button2.setAttribute("style", "display:none");
  // use .setAttribute() to hide the button3 element
  button3.setAttribute("style", "display:none");
  h4_3.setAttribute("style", "display:none");
  // use .setAttribute() to change the text of the h4_2 element to "View High Scores"
  h4_2.textContent = "View High Scores";
  // use .setAttribute() to change the text of the h4 element to "Coding Quiz Challenge"
  h4.textContent = "Coding Quiz Challenge";
  startButton.addEventListener("click", function (event) {
    event.stopPropagation();
    styleFirstPage();
  });
}
//----------------------------------------------------------------------------------------------------------------
// if h4_2 is clicked, hide all elements except the input and button4
h4_3.addEventListener("click", function (event) {
  event.stopPropagation();
  styleTitlePage();
});

h4_2.addEventListener("click", function (event) {
  event.stopPropagation();
  styleSecondPage();

  // if h4_2 is clicked again, show all elements except the input and button4
});
styleTitlePage();
