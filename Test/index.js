// function findOppositeNumber(number1,number2){
//     if(number2 > number1/2){
//         console.log(number2-number1/2);
//     }
//     if(number2 < number1/2){
//         console.log(number2+number1/2);
//     }
//     if(number2 == number1/2){
//         console.log("0");
//     }

// }
// findOppositeNumber(10,7);
//ex2:

// function mergeString(string1,string2){
//     if(string1.length > string2.length)
//         for(let i in string1){
//              console.log(string1[i]);
//              console.log(string2[i])   
//     }
//     else{
//         for(let i in string2){
//                 console.log(string1[i]);
//                 console.log(string2[i]);
//         }
//     }
// }
// mergeString("abcde","123");

// Ex3:
// function smallGame(){
//     let luckyNumber = Math.floor(Math.random()* 101);
//     let x = document.getElementById('input').value; 
//     if( x == luckyNumber){
//         alert('Bạn đã dự đoán đúng');
//     }
//     else {
//         alert('Bạn đã dự đoán sai');
//         alert('Số đúng là '+ luckyNumber);
//     }
// }