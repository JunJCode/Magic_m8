
//This is the intial array with all the 20 answers
let answers = ["It is certain.", "It is decidedly.", "Yes Definitely!", "You may rely on it!", "As I see it, yes!", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy.", "Try again.", "Ask again later.","Better not tell you now.","Cannot predict now.", "Concentrate and ask again.", "Don't count on it!", "My reply is no!", "My sources say no.", "Outlook not so good.", "Very doubtful."];

//Declartion of a function and passing in the array of answers
function random_items(answers){ 
//return is used to return a value and save it to be called later
    return answers[Math.floor(Math.random()*answers.length)];}
//The code inside [] above will return a number between 0 - 20
//The Math.floor() function returns the largest integer less than or equal to a given number.
//The Math.random() function returns a number between 0-1
//The Math.random() number is then * by the answers.length which is the array

// Below the variable has been created 
let randomAnswer = (random_items(answers));

console.log(randomAnswer);

//This will select the textDisplay ID within the HTML Document and then display the variable randomAnswer
document.getElementById('textDisplay').innerHTML = randomAnswer;

/* function hideShow() {
    let x = document.getElementById("triangle");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} */

//answerDisplay = random_item



const eightBall = document.querySelector('.magicEightBall');
eightBall.addEventListener('click', function(){
     eightBall.style.backgroundColor="red";
});


/* const triangle = document.getElementById('tri');
eightBall.addEventListener('click', function() {
    let x = document.getElementById("triangle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}); */

const ShowHidetriangle = document.getElementById('tri');
eightBall.addEventListener('click', function() {
    /* tri.style.backgroundColor="green"; */
    if (tri.style.display === "none") {
        tri.style.display = "block";
    } else {
        tri.style.display = "none";
    }
});

//
//console.log(answers.length);

//for (let i=0; i<answers.length; i++){
//    let givenAnswer = answers[i];
//    let newAnswers = givenAnswer[Math.floor(Math.random()*givenAnswer.length)];
//    console.log(newAnswers);
//};

    //console.log(`This is each asnswer +  ${i}`);
//}

//function random_item(answers)
//    { return answers[Math.floor(Math.random()*ansers.length)];}

//console.log(random_item(answers));

//let answers = amswers[Math.floor(Math.random()*answers.length)];
//console.log(answers)