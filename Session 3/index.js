//Ex1:
{//Way 1:
    // let a = 5;
    // let b = 6;
    // let temp = a;
    // a = b;
    // b = temp;
//Way 2:
    // let a = 5;
    // let b = 6;

    // a = a + b;
    // b = a - b;
    // a = a - b;

}
//Ex2:
{
    // const s = 'Hello beauty there';
    // const a = Array(s);
    // console.log(a);
    // var x = s.split(' ');
    // console.log(x);

}
//Ex3:
{
    // const a = [4,5,7,-8];
    // console.log(...a);
}
//Ex4:
// var listItems = ['Jeans', 'T-shirts','Socks'];
// function readListProduces(){
//     console.log('The current items are:');
//     for (let i in listItems) {
//         console.log(`${Number(i)+1}. ${listItems[i]}`);
//     }
// }
//    do {
//     let n = prompt('Hi there, welcome to the shop admin panel, what do you want?(C,R,U,D)');
//     if(n == ""){
//         break;
//     }
//     else if (n == 'r' ||n == 'R'){
//         readListProduces();
//         }
//     else if(n == 'c' || n == 'C'){
//         let newItems= prompt('Enter the name of new item');
//         listItems.push(newItems);
//         alert('Done');
//         readListProduces();
//     }
//     else if(n == 'u'|| n=='U'){
//         let position = Number(prompt('Enter the position you want to update'));
//         let newName = prompt('Enter the new name');
//         listItems[position-1] = newName;
//         alert('Done');
//         readListProduces();
//     }
//     else if(n == 'd'||n == 'D'){
//         let deletePosition = Number(prompt('Enter the position '));
//         listItems.splice(deletePosition-1,1);
//         alert('Done');
//         readListProduces();
//     }
//     else {
//         alert('This command is not supported');
//     }
//     }
//     while(1);    
//Ex5:
    // {   let sum = 0;
    //     let array = prompt('Enter a sequence of number, separated by commas');
    //     let numberArray = array.split(',');
    //     console.log(numberArray);
    //     for(let i in numberArray){
    //         sum+=Number(numberArray[i]);
    //     }
    //     console.log('The sum of them is ' + sum);
    // }
//Ex6:
    // {
    //     let array = prompt('Enter a sequence of number, separated by commas');
    //     let numberArray = array.split(',');
    //     let min = Math.min.apply(Math,numberArray);
    //     console.log('The smallest number is ' + min);
    // }
//Ex7:
    {
        // const arr = [3, 4, 6, -9, 10, -88, 2];
        // let numberEntered = Number(prompt('Enter a number'));
        // let index = arr.indexOf(numberEntered);
        // if(index != - 1){
        //     alert(numberEntered + ' is found in my array');
        // }
        // else {
        //     alert(numberEntered + ' is not found in my array');
        // }

    }
//Ex8.1:
    // let sheepSizes = [5,7,300,90,24,50,75];
    // console.log('Im hung and here are my sheep sizes: ');
    // console.log(sheepSizes.join(' '));
    // console.log('Now my biggest sheep has size ' + Math.max.apply(null,sheepSizes)+ ', let shave it');
    // console.log('After shearing, here is my flock');
    // sheepSizes[sheepSizes.indexOf(Math.max.apply(null,sheepSizes))] = 8;
    // console.log(sheepSizes.join(' '));
    // {   
    // let month = 1;
    // for(let i = month;i<=3;i++){
    //     if(i !=3 ){
    //     console.log('MONTH '+ i);
    //     console.log('One month has passed, my sheeps have grown, here are their sizes');
    //     for(let i in sheepSizes){
    //         sheepSizes[i]+=50;
    //     }
    //     console.log(sheepSizes.join(' '));
    //     console.log('Now my biggest sheep has size ' + Math.max.apply(null,sheepSizes)+ ', let shave it');
    //     sheepSizes[sheepSizes.indexOf(Math.max.apply(null,sheepSizes))] = 8;
    //     console.log('After shearing, here is my flock');
    //     console.log(sheepSizes.join(' '));    
    //     }
    // else {
    //     console.log('MONTH '+ i);
    //     console.log('One month has passed, my sheeps have grown, here are their sizes');
    //     for(let i in sheepSizes){
    //         sheepSizes[i]+=50;
    //     }
    //     console.log(sheepSizes.join(' '));

    // }
    // }
    // let sum = 0;
    // for(let i in sheepSizes){
    //     sum+=sheepSizes[i];
    // }
    // console.log('My flock has size in total: '+ sum);
    // console.log('I would get ' + sum + ` * 2$ = `+ sum*2);
    // }   
    // {
        
    // }
//Bai tap Video : 
//Ex1 : 
{
//     let moviesName = ['Me before you', 'The Avengers','Peaky Blinder'];
//     moviesName.push('Money heist');
//     // let i = prompt('Enter a number');
//     // console.log(moviesName[i]);
//     // let moviesTittle = prompt('Enter a movie tittle');
//     // moviesName[0] = moviesTittle;
//     // moviesName[i] = moviesTittle;
//     // let delPosition = Number(prompt('Enter the position of movie you want to delete'));
//     // moviesName.splice(delPosition-1,1);

//     // let delQuality = Number(prompt('Enter a quality of number you want to delete'));
//     // let startPosition = Number(prompt('Enter a star number'));
//     // moviesName.splice(startPosition-1,delQuality);}
    
//         //Read all:
// //     console.log(moviesName);
// //     for(let i = 0;i<=moviesName.length/2;i++){
// //         console.log(moviesName(i));
// //     }
// //     for(let i =0;i<moviesName.length;i++){
// //         console.log(`${Number(i)+1}. ${moviesName[i]}`);
// //     }
   
//     for(let i in moviesName){
//         moviesName[i] = moviesName[i].toLowerCase(); 
//     }
//     console.log(moviesName);
}
{
    //ex2:
    // let yourName = prompt('Enter your name');
    // if(yourName.length>15){
    //     alert('Your username is too long');
    // }
    // else {
    //     alert('Good username');
    // }
}
{
    //ex3:
    
    // do {
    // let quickQuizz = prompt('How many legs does a spider have?\n1.None\n2.4 legs\n3.8 legs\n4.12 legs');
    // if(quickQuizz == 1 || quickQuizz == 2 ||quickQuizz == 4 ){
    //     alert('Haha wrong answer, try Again?');
    // }
    // else if(quickQuizz == 3 ){
    //     alert('Congrats, your answer is right');
    // }
    // else {
    //     alert('This is not an answer for this quizz');
    // }
    // }   
    // while(true);
}

    
     

