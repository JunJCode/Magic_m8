
//This is the intial array with all the 20 answers
let answers = ["It is certain.", "It is decidedly.", "Yes Definitely!", "You may rely on it!", "As I see it, yes!", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy.", "Try again.", "Ask again later.","Ask Marc.","Cannot predict now.", "Did you turn it on and off again?", "Don't count on it!", "My reply is no!", "My sources say no.", "Outlook not so good.", "Very doubtful."];
//Declartion of a function and passing in the array of answers
//return is used to return a value and save it to be called later
let random_answer = () => answers[Math.floor(Math.random()*answers.length)];
// below is the Traditional function
// function random_answer(){ 
//     return answers[Math.floor(Math.random()*answers.length)];}
//The code inside [] above will return a number between 0 - 20
//The Math.floor() function returns the largest integer less than or equal to a given number.
//The Math.random() function returns a number between 0-1
//The Math.random() number is then * by the answers.length which is the array
//console.log(random_answer(answers));

// Below the variable random_answer has been created to save the results of calling the function random_answer and passing in the array answers
//let randomAnswer = (random_answer(answers));

//Below both console.logs will give the same result but the first is calling a the function and passing in anwers.

//console.log(random_answers(answers))
//console.log(randomAnswer);

//This will select the textDisplay ID within the HTML Document and then display the variable randomAnswer
//document.getElementById('textDisplay').innerHTML = randomAnswer;

const ballClick = document.querySelector(".magic-eight-ball");
const textDisplay = document.getElementById('text-display');

// ballClick.addEventListener("click", function(){
//     setTimeout(function() {
//     textDisplay.innerHTML = random_answer(answers);
//     console.log(random_answer(answers));}, 600);
// });
//Below will name the varable associated to the tri element in the index.html

const ShowHidetriangle = document.getElementById('triangle');
const audio = document.getElementById("myAudio"); 


//The first line defines a 
//Below will set up another event listen which will wait for an event and then run the function that will add a class to the tri ID in the html(triangle). This class will then use CSS to adjust the opacity of the traingle.
//The next line will run the random_answers function with a parameter of answers and then input it into the textDisplay variable with is linked to the ID textDisplay.
//Then the next line uses a timer to remove the previous applied class after 4000 milliseconds.


ballClick.addEventListener("click", () => {
                let playAudio = () => audio.play();
                // function playAudio() {audio.play();};
                playAudio(audio);
                ShowHidetriangle.classList.add("elementToFadeInAndOut");
                textDisplay.innerHTML = random_answer(answers);
                setTimeout(() => {ShowHidetriangle.classList.remove("elementToFadeInAndOut");}, 4000)
});
//////////////////////////////////////////////////////////////////////////////////////////


//The Code below makes the triangle display 400 miliseconds after it's click.
    // setTimeout(function() {
    //     ShowHidetriangle.style.display = "block";}, 400);
    //ShowHidetriangle.fadeIn(100);

    //tri.style.backgroundColor="green";
     /* ShowHidetriangle.style.display = "none";
     ShowHidetriangle.style.display = "block"; */
     //////////

   /*   if (ShowHidetriangle.style.display === "none") {
        ShowHidetriangle.style.display = "block";
    } else {
        ShowHidetriangle.style.display = "none";
    } 
});*/



//This code will display the randomAnswers variable on a click
/* ballClick.addEventListener("click", function(){
    textDisplay.innerHTML = randomAnswer;
}); */

//The below code can input text into the p tag on the html
/* ballClick.addEventListener("click", function(){
    textDisplay.textContent = "This is a test";
}); */




/* function hideShow() {
    let x = document.getElementById("triangle");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} */

//answerDisplay = random_item

/* const clickEightBall = document.querySelector(".magicEightBall");

clickEightBall.addEventListener("click", random_items()); */


/* const eightBall = document.querySelector('.magicEightBall');
eightBall.addEventListener('click', function(){
     eightBall.style.backgroundColor="red";
}); */


/* const triangle = document.getElementById('tri');
eightBall.addEventListener('click', function() {
    let x = document.getElementById("triangle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}); */

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

// var x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 