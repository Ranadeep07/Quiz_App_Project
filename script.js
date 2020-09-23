const quizData = [
    { 
        question: "What is the scientific name of a butterfly?",
        a:"Apis",
        b:"Coleoptera",
        c:"Formicidae",
        d:"Rhopalocera",
        correctIndex: 'c',
    },
    {
        question: "How hot is the surface of the sun?",
        
        a:"1,233 K",
        b:"5,778 K",
        c:"12,130 K",
        d:"101,300 K",
        correctIndex: "a"
    },
    {
        question: "Who are the actors in The Internship?",
        a:"Ben Stiller, Jonah Hill",
        b:"Courteney Cox, Matt LeBlanc",
        c:"Kaley Cuoco, Jim Parsons",
        d:"Vince Vaughn, Owen Wilson",
        correctIndex: 'c'
    },
    {
        question: "What is the capital of Spain?",
        a:"Berlin",
        b:"Buenos Aires",
        c:"Madrid",
        d:"San Juan",
        correctIndex: 'b'
    },
    {
        question: "What are the school colors of the University of Texas at Austin?",
        a:"Black, Red",
        b:"Blue, Orange",
        c:"White, Burnt Orange",
        d:"White, Old gold, Gold",
        
        correctIndex: 'b'
    },
    {
        question: "What is 70 degrees Fahrenheit in Celsius?",
        a:"18.8889",
        b:"20",
        c:"21.1111",
        d:"158",
        "correctIndex": 'b'
    },
    {
        question: "When was Mahatma Gandhi born?",
        a:"October 2, 1869",
        b:"December 15, 1872",
        c:"July 18, 1918",
        d:"January 15, 1929",
        correctIndex: 'a'
    },
    {
        question: "How far is the moon from Earth?",
        a:"7,918 miles (12,742 km)",
        b:"86,881 miles (139,822 km)",
        c:"238,400 miles (384,400 km)",
        d:"35,980,000 miles (57,910,000 km)",
        
        correctIndex: 'b'
    },
    {
        question: "What is 65 times 52?",
        a:"117",
        b:"3120",
        c:"3380",
        d:"3520",
        
        correctIndex: 'b'
    },
    {
        question: "How tall is Mount Everest?",
        a:"6,683 ft (2,037 m)",
        b:"7,918 ft (2,413 m)",
        c:"19,341 ft (5,895 m)",
        d:"29,029 ft (8,847 m)",
        
        correctIndex: 'c'
    },
    {
        "question": "When did The Avengers come out?",
        
        a:"May 2, 2008",
        b:"May 4, 2012",
        c:"May 3, 2013",
        d:"April 4, 2014",
        
        correctIndex: 'a'
    },
    {
        question: "What is 48,879 in hexidecimal?",
        a:"0x18C1",
        b:"0xBEEF",
        c:"0xDEAD",
        d:"0x12D591",
        correctIndex: 'a'
    }
]

var currentQuestion = 0

const a_ans = document.getElementById('a_ans')
const b_ans = document.getElementById('b_ans')
const c_ans = document.getElementById('c_ans')
const d_ans = document.getElementById('d_ans')
const btn = document.getElementById('btn');
const question = document.getElementById('question')
const quiz = document.getElementById('quiz')
const messages = document.getElementById('messages') 

function getAnswer(){
    var answer = undefined;
    const answerElement = document.querySelectorAll('.answer');
    answerElement.forEach((answerElement)=>{
        if(answerElement.checked){
            answer = answerElement.id;
        }
    })
    return answer;
}

loadQuiz()
function loadQuiz(){
    let quizQuestions = quizData[currentQuestion];
    question.innerText = quizQuestions.question;
    a_ans.innerText = quizQuestions.a;
    b_ans.innerText = quizQuestions.b;
    c_ans.innerText = quizQuestions.c;
    d_ans.innerText = quizQuestions.d;
}
var userAnswers = []
let answers = []
function scoreGenerator() {
    var score = 0
    for(var i=0;i<quizData.length;i++){
        answers[i] = quizData[i].correctIndex;
    }
    for(var i = 0; i<answers.length ;i++){
        if(userAnswers[i] == answers[i]){
            ++score;
        }
    }
    return score;
}

btn.addEventListener('click',()=>{
    const answer = getAnswer();
    console.log(typeof(answer),answer);
    messages.innerHTML = ""
    if(answer){
        ++currentQuestion;
        userAnswers.push(answer)
    if(currentQuestion < quizData.length){
        loadQuiz();
    }else{
        let score = scoreGenerator()
        quiz.innerHTML = `<h1>Thanks for playing, Your score is ${score}</h1>`;
        console.log(answers)
        console.log(userAnswers)
    }
    
    }else{
        messages.innerHTML = '<h5 style="background-color: red; color: white; " class="text-align-center">You have to choose one option</h5>'
    }
})