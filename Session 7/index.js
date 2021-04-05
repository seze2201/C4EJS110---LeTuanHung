//Ex1:
// const container = document.getElementById('list');
// for(let i=0;i<3;i++){
//     container.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
// }
// console.log(container);
//Ex2:
// setInterval(function(){ alert("Hello"); }, 3000);
//Ex3:
// console.log('The answer is no, let and var cant be exist outside the function');
//Ex4:
// function ex4(){
//     var arr  = document.getElementsByTagName("li");
//     console.log(arr[1]);
// }
//ex4();
//Ex5:
// function ex5(){
//     var arr  = document.getElementsByClassName("Singer");
//     console.log(arr[2]);
// }
// ex5();
//Ex6:
// function ex6(){
//     var arr = document.getElementById('Remove');
//     arr.remove();
// }
// ex6();
//Ex7:
// function ex71(){
//     var btn1 = document.getElementById('button1');
//     btn1.addEventListener('click',(e)=>{console.log(e.target);});
//     var btn2 = document.getElementById('button2');
//     btn2.addEventListener('click',(e)=>{console.log(e.target);});
// }
// function ex72(){
//     var btn1 = getElementById('button1');
//     btn1.addEventListener('keydown',(e)=>{console.log(e.key);})
// }
//Ex8:
// function ex8(){
//     alert('Im Hung and i want to sleep');
// }
//Ex9,10:
//  function ex9(name,wish){
//     if(wish!=undefined)
//         alert('Im '+name +' and i want to '+wish);
//     else
//         alert('Im '+name);
//  }
// ex9('hung','clutch');
// function ex11(){
//     var name1 = document.getElementById('nameinput');
//     var name2 = document.getElementById('nameinput');
//     var upperBtn = document.getElementById('upper_btn');
//     var resultDiv = document.getElementById('result_div');
//     console.log(name1);
//     console.log(upperBtn);
//     console.log(resultDiv);
//     upperBtn.addEventListener('click',()=>{
//         console.log(name1.value);
//     })
// }
// ex11();
