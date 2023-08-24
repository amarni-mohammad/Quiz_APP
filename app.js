const question =[
    {
        question:"What country has the highest life expectancy?  ",
        Answers:[
            {text:"palestine",correct:false},
            {text:"France",correct:false},
            {text:"Hong Kong",correct:true},
            {text:"new York",correct:false},
        ]
    },
    {
        question:"What year was the United Nations established? ",
        Answers:[
            {text:"1945",correct:true},
            {text:"1955",correct:false},
            {text:"2000",correct:false},
            {text:"1985",correct:false},
        ]
    },
    {
        question:"How many elements are in the periodic table?  ",
        Answers:[
            {text:"122",correct:false},
            {text:"50",correct:false},
            {text:"205",correct:false},
            {text:"118",correct:true},
        ]
    },
    {
        question:"which is larget animal in the world?",
        Answers:[
            {text:"shark",correct:false},
            {text:"the blue whale",correct:true},
            {text:"elephant",correct:false},
            {text:"the lion",correct:false},
        ]
    },
    {
        question:"What company was originally called (Cadabra) ? ",
        Answers:[
            {text:"Amazon",correct:true},
            {text:"ali express",correct:false},
            {text:"shein",correct:false},
            {text:"all the web site",correct:false},
        ]
    },
    {
        question:"What game studio makes the Red Dead Redemption series? ",
        Answers:[
            {text:"Epic Games",correct:false},
            {text:"steam",correct:false},
            {text:"Origin",correct:false},
            {text:" Rockstar Games",correct:true},
        ]
    },
    {
        question:"What country has won the most World Cups?  ",
        Answers:[
            {text:"Spain",correct:false},
            {text:"Brazil",correct:true},
            {text:"England",correct:false},
            {text:"Madrid",correct:false},
        ]
    },
]






const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer_button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
     currentQuestionIndex=0;
     score=0;
     nextButton.innerHTML="Next";
    showQuestion()
}





function  showQuestion(){
    reseatState();
    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
   

    currentQuestion.Answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}


function reseatState(){
    nextButton.style.display="none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectBtn=e.target;
const isCorrect=selectBtn.dataset.correct==="true";
if(isCorrect){
    selectBtn.classList.add("correct")
    score++
}else{
    selectBtn.classList.add("incorrect")
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct")
    }
    button.display=true;
})
nextButton.style.display="block"
}
function showScore(){
    reseatState();
    questionElement.innerHTML=`you scored ${score} out of ${question.length} 😄 !`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion()
    }else{
        showScore()
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();