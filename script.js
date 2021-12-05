let Computer=document.querySelector('input#Computer');
let Router=document.querySelector('input#Router');
let Mouse=document.querySelector('input#Mouse');
let totalcost=document.querySelector('h2#total');
let button=document.querySelector('button#button');


button.addEventListener('click',()=>{
  let Computercost=Computer.value*10000;
  let Routercost=Router.value*2500;
  let Mousecost=Mouse.value*250;
  let Total_amount=Computercost+Routercost+Mousecost;

  totalcost.innerText=Total_amount;
})