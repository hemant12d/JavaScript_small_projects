let date = document.getElementById('addDate');
let Current_date  = new Date();
// 28 February, 2021
let dateDay = Current_date.getDate();
let dateMonth = Current_date.getMonth();
let dateYear = Current_date.getFullYear();
if (dateMonth == 0) {
    date.innerText = `${dateDay} January, ${dateYear}`;
}
else if (dateMonth == 1) {
    date.innerText = `${dateDay} February, ${dateYear}`;    
}
else if (dateMonth == 2) {
    date.innerText = `${dateDay} March, ${dateYear}`;    
}
else if (dateMonth == 3) {
    date.innerText = `${dateDay} April, ${dateYear}`;    
}
else if (dateMonth == 4) {
    date.innerText = `${dateDay} May, ${dateYear}`;    
}
else if (dateMonth == 5) {
    date.innerText = `${dateDay} June, ${dateYear}`;    
}
else if (dateMonth == 6) {
    date.innerText = `${dateDay} July, ${dateYear}`;    
}
else if (dateMonth == 7) {
    date.innerText = `${dateDay} August, ${dateYear}`;    
}
else if (dateMonth == 8) {
    date.innerText = `${dateDay} September, ${dateYear}`;    
}
else if (dateMonth == 9) {
    date.innerText = `${dateDay} October, ${dateYear}`;    
}
else if (dateMonth == 10) {
    date.innerText = `${dateDay} November, ${dateYear}`;    
}
else {
    date.innerText = `${dateDay} December, ${dateYear}`;
}

console.log('This file is working fine');

let elem =  document.getElementsByClassName('border');
Array.from(elem).forEach(element => {
   console.log(element.children[1].children[1].children[0]);
   let controlBtn = element.children[1].children[1].children[0];

   controlBtn.addEventListener('click', ()=>{
       console.log('You have clicked on the button');
       element.children[0].children[1].classList.toggle('addclassheight');
       element.classList.toggle('adddis-flex');
       element.children[1].classList.toggle('adddis-flex-colm'); 
   });
//    console.log(element);
});

// let element = document.getElementsByClassName('border');
// console.log(element);