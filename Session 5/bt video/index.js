// //Ex1:
// let a = Math.floor(Math.random()*101);
// console.log(a/100);
// //Ex2:
// let arr = [2,5,6,9,10];
// console.log(arr[Math.floor(Math.random()*arr.length)]);
//Ex3:
let quizz = [
    {
        question:'1+1 = ?',
        listOfAnswers:['1','2','3','4'],
        trueAnswer:2,
    },

    {
        question:'Đá trong tiếng anh có nghĩa là gì?',
        listOfAnswers:['Kick','Ice','Stone','Rock'],
        trueAnswer:1,
    },

    {
        question:'Bao giờ thì trả?',
        listOfAnswers:['Tí nữa','Mai','Bao giờ có thì trả','Không bao giờ'],
        trueAnswer:4,
    },
    
    {
        question:'Cái gì quý hơn độc lập tự do?',
        listOfAnswers:['Tiền','Người Yêu','Vàng','Không có gì'],
        trueAnswer:4,
    }
]   
    let randomQuizz = Math.floor(Math.random()*quizz.length);
    let ordinalQuizz = quizz[randomQuizz];
    let answer = ordinalQuizz.question;
    for(let i in ordinalQuizz.listOfAnswers){
        answer +=`\n${Number(i)+1}.${ordinalQuizz.listOfAnswers[i]}`    
    }

    let yourAnswer = Number(prompt(answer));
    if(yourAnswer == ordinalQuizz.trueAnswer){
        alert('Your answer is correct');
    }
    else {
        alert('Your answer is wrong ');
    }



