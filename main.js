/* Quiz Container */
const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<scripting>",
        d: "<js>",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "None of the above.",
        correct: "c",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: '<script name="xxx.js">',
        b: '<script src="xxx.js">',
        c: '<script href="xxx.js">',
        d: '<script type="xxx.js">',
        correct: "b",
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'alert("Hello World")',
        b: 'msg("Hello World")',
        c: 'msgBox("Hello World")',
        d: 'alertBox("Hello World")',
        correct: "a",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function myFunction()",
        c: "function=myFunction()",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        a: "toLocaleLowerCase()",
        b: "toLowerCase()",
        c: "toString()",
        d: "substring()",
        correct: "b",
    },
    {
        question: "How can you add single line comments in a JavaScript?",
        a: "'This is a comment'",
        b: "<!--This is a comment-->",
        c: "//This is a comment",
        d: "/*This is a comment*/",
        correct: "c",
    },
    {
        question: "How to insert a comment that has more than one line?",
        a: "//This comment has more than one line",
        b: "/*This comment has more than one line*/",
        c: "<!--This comment has more than one line-->",
        d: '"This comment has more than one line"',
        correct: "b",
    },
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        a: "toSource()",
        b: "sort()",
        c: "splice()",
        d: "unshift()",
        correct: "c",
    },
    {
        question: "JavaScript is a _____ language",
        a: "programming",
        b: "application",
        c: "scripting",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "JavaScript is a _____ -side programming language",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None of the above",
        correct: "c",
    },
    {
        question: 'Which of the following will write the message "Hello DataFlair!" in an alert box?',
        a: 'alertBox("Hello DataFlair!");',
        b: '(alert(Hello DataFlair!);',
        c: 'msgAlert("Hello DataFlair!")',
        d: 'alert("Hello DataFlair!");',
        correct: "d",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        a: "min(x,y);",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy);",
        correct: "b",
    },
    {
        question: 'If the value of x is 40, then what is the output of the following program?\n(x % 10 == 0)? console.log("Divisible by 10"): console.log("Not divisible by 10");',
        a: "Reference Error",
        b: "Divisible by 10",
        c: "Not divisible by 10",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        a: "catch",
        b: "label",
        c: "try",
        d: "default",
        correct: "d",
    },
    {
        question: 'Which are the correct "if statements to execute certain code if "x" is equal to 2?',
        a: "if(x 2)",
        b: "if(x = 2)",
        c: "if(x == 2)",
        d: "if(x != 2)",
        correct: "c",
    },
    {
        question: "What will the code return?\n Boolean(3 < 7)",
        a: "true",
        b: "false",
        c: "NaN",
        d: "SyntaxError",
        correct: "a",
    },
    {
        question: "What is the output of the following code in the console?\n var x = 0;\n function fun(){ \n ++x; \n this.x = x; \n return x; \n } \n var bar = new new fun; \n console.log(bar.x);",
        a: "ReferenceError",
        b: "undefined",
        c: "1",
        d: "TypeError",
        correct: "d",
    },
    {
        question: 'Which is the correct JavaScript syntax to change the HTML content given below? \n <p id="test">Hello World!</p>',
        a: 'document.getElementById("test").innerHTML="Hello DataFlair!";',
        b: 'document.getElementsById("test").innerHTML="Hello DataFlair!";',
        c: 'document.getElementById(test).innerHTML ="Hello DataFlair!";',
        d: 'document.getElementByTagName("p")[o].innerHTML = "Hello DataFlair!";',
        correct: "a",
    },
    {
        question: "Which of the following is a server-side JavaScript object?",
        a: "Function",
        b: "File",
        c: "FileUpload",
        d: "Date",
        correct: "b",
    },
];

//Grabing all the elements
const question = document.getElementById('question');
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

let index = 0;
let score = 0;

//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
  d.innerText = quizData[index].d;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      quiz.innerHTML = `
           <h2>score: ${score}/${quizData.length}</h2>
           <button onclick="location.reload()">RESTART</button>
           `

           clearInterval(timer);
    }
  });
}
getquiz();
startquiz();





