

let answers = ["It is certain.", "It is decidedly.", "Yes Definitely!", "You may rely on it!", "As I see it, yes!", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy.", "Try again.", "Ask again later.","Ask Marc.","Cannot predict now.", "Did you turn it on and off again?", "Don't count on it!", "My reply is no!", "My sources say no.", "Outlook not so good.", "Very doubtful."];
//Declartion of a function and passing in the array of answers
//return is used to return a value and save it to be called later
let random_answer = () => answers[Math.floor(Math.random()*answers.length)];
// below is the Traditional function
// function random_answer(){ 
//     return answers[Math.floor(Math.random()*answers.length)];}

//The Math.floor() function returns the largest integer less than or equal to a given number.
//The Math.random() function returns a number between 0-1
//The Math.random() number is then * by the answers.length which is the array.


//First set-up query selector to the class of magic eight ball and named it ballClick 
//Then set-up and searched for the element with ID text-display in html 
const ballClick = document.querySelector(".magic-eight-ball");
const textDisplay = document.getElementById('text-display');

// The same for both bellow
const ShowHidetriangle = document.getElementById('triangle');
const audio = document.getElementById("myAudio"); 

//below will look for a click on the variable ballClick which was defined above and then run the function
//the function will play the music 
//then it will apply the elementToFadeInAndOut class to the ShowHideTriangle variable which is linked to the class triangle in the CSS.
//the next line will implant the results from the random_answerfunction in the variable textDisplay, which is linked to text-display class in HTML.
//the next line will remove the class elementToFadeInAndOut from the variable ShowHidetriangle. But also use a timeout to slow the process.

ballClick.addEventListener("click", () => {
                let playAudio = () => audio.play();
                playAudio(audio);
                ShowHidetriangle.classList.add("elementToFadeInAndOut");
                textDisplay.innerHTML = random_answer(answers);
                setTimeout(() => {ShowHidetriangle.classList.remove("elementToFadeInAndOut");}, 4000)
});
//////////////////////////////////////////////////////////////////////////////////////////