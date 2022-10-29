// this is where I will put my code
// using document.createElement() to create a header
var div_actions = document.createElement("div");
// using document.createElement() to create a h4 element to put in the header
var h4 = document.createElement("h4");
// using document.createElement() to create another h4 element to put in the header
var h4_2 = document.createElement("h4");
// using document.createElement() to create a h1 element
var h1 = document.createElement("h1");
// using document.createElement() to create a section element
var section = document.createElement("section");
// using document.createElement() to create a form element
var form = document.createElement("form");
// using document.createElement() to create a input element
var input = document.createElement("input");
// using document.createElement() to create  5 button elements
var button = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
// using document.createElement() to create a ul element
// using .textContent to add text to the h1 element
h1.textContent = "Quiz";

// setting the class attribute of all buttons to "btn"
button.setAttribute("class", "btn");
button1.setAttribute("class", "btn");
button2.setAttribute("class", "btn");
button3.setAttribute("class", "btn");
button4.setAttribute("class", "btn");
// using .setAttribute() to add an id to the form element
form.setAttribute("id", "form");
// using .setAttribute() to add an id to the input element
input.setAttribute("id", "input");
// using .setAttribute() to add an id to the button element
button.setAttribute("id", "button");
// using .setAttribute() to add an id to the button1 element
button1.setAttribute("id", "button1");
// using .setAttribute() to add an id to the button2 element
button2.setAttribute("id", "button2");
// using .setAttribute() to add an id to the button3 element
button3.setAttribute("id", "button3");
// using .setAttribute() to add an id to the button4 element
button4.setAttribute("id", "button4");
//using .appendChile to add the header element to the body element
document.body.appendChild(div_actions);
// using .appendChild() to add the h4 element to the div_actions element
div_actions.appendChild(h4);
div_actions.appendChild(h4_2);

// using .appendChild() to add the section to the body element
document.body.appendChild(section);
// using .appendChild() to add the h1 to the body element
section.appendChild(h1);
// using .appendChild() to add the form to the section element
section.appendChild(form);
// using .appendChild() to add the input to the form element
form.appendChild(input);
// using .appendChild() to add the button4 to the form element
form.appendChild(button4);
// using .appendChild() to add the button to the form element
form.appendChild(button);
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

button.textContent = "Question 1";
// using .textContent to add text to the button1 element
button1.textContent = "Question 2";
// using .textContent to add text to the button2 element
button2.textContent = "Question 3";
// using .textContent to add text to the button3 element
button3.textContent = "Question 4";

// using .textContent to add text to the button4 element
button4.textContent = "Save";

// using .setAttribute() to add style to the h1 element
div_actions.setAttribute(
  "style",
  "display:flex; background-color: white; color: black; padding: 20px; text-align: center; flex-direction: row-reverse; width: 95%; justify-content: space-between; margin: 0 auto; border-radius: 5px; margin-bottom: 20px;"
);
h1.setAttribute(
  "style",
  "text-align:center; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
);
// using .setAttribute() to add style to the section element
section.setAttribute(
  "style",
  "text-align:center; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif; display: flex; flex-direction: column; justify-content: center; align-items: center;"
);
// using .setAttribute() to add style to the form element
form.setAttribute(
  "style",
  "text-align:center; display:flex; flex-direction:column; color:black; font-size: 50px; font-family: 'Times New Roman', Times, serif;"
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
    "background-color:purple; color:white; margin:5px; border-radius:10px; font-size: 20px; font-family: 'Times New Roman', Times, serif;"
  );
});
//use .setAttribute() to hide button4
button4.setAttribute("style", "display:none");
// use .setAttribute() to hide the input element
input.setAttribute("style", "display:none");
// using .setAttribute() to add style to the body element
document.body.setAttribute(
  "style",
  "background-color:white; display:flex; flex-direction:column; justify-content:center; align-items:center;"
);
