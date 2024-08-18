
// Program to calculate the circunference and area of a circle

let radius;
const PI= 3.14159;
let circumference;
let area;
const myButton2=document.getElementById('evaluate');
myButton2.onclick=function(){
    radius= document.getElementById('radius').value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    area = PI*(radius^2)
    document.getElementById('textArea').textContent=`The circumference of the circle is ${circumference}cm and its area is ${area}cm^2`
}

// counter programs begins here
let counter=0;
let Changeme;
const increaseBtn= document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn=document.getElementById('reset');
increaseBtn.onclick= function(){
    let increase=counter++;
    document.getElementById('Changeme').textContent=increase

}
decreaseBtn.onclick= function(){
    let decrease=counter--;
    document.getElementById('Changeme').textContent=decrease

}
resetBtn.onclick= function(){
    counter=0
    document.getElementById('Changeme').textContent=counter;

}

// Random number generator program starts here
let minNumber=10;
let maxNumber=100;
let randomNumber1;
let randomNumber2;
let randomNumber3;

const generate= document.getElementById('generate');
generate.onclick=function(){
    randomNumber1=Math.floor(Math.random()*(maxNumber-minNumber)+1) +minNumber ;
    console.log(randomNumber1);
     randomNumber2=Math.floor(Math.random()*(maxNumber-minNumber)+1) +minNumber ;
    console.log(randomNumber2);
     randomNumber3=Math.floor(Math.random()*(maxNumber-minNumber)+1) +minNumber ;
    console.log(randomNumber3);

    document.getElementById('rytHere').textContent=randomNumber1;
    document.getElementById('rytThere').textContent=randomNumber2;
    document.getElementById('rytNow').textContent=randomNumber3;
}

// Working with forms program starts here

const Subscribe= document.getElementById('subscribe');
const visa = document.getElementById('visa');
const masterCard = document.getElementById('MasterCard');
const payPal = document.getElementById('paypal');
let displayed =document.getElementById('Go');
let subStatus= document.getElementById('Status');
const pushMe = document.getElementById('pushme');

pushMe.onclick= function(){
     
    if(Subscribe.checked){
        displayed.textContent=`You subscribed`;
    }else{
         displayed.textContent=`Please subscribe`;
    }
    if(visa.checked){
         subStatus.textContent= `You payed with Visa`
    }else if(masterCard.checked){
          subStatus.textContent=`You payed with Master card`
    }else if(payPal.checked){
          subStatus.textContent=`You payed with Paypal`
    }else{
          subStatus.textContent=`Please pick a payment method`
    }


}

// Temperature conversion program starts here

const TempValue=document.getElementById('tempValue');
const CF= document.getElementById('Celsius-Fahrenheit');
const FC = document.getElementById('Fahrenheit-Celsius');
const Display= document.getElementById('display-conversion');
let temp;


 function Con(){
     if(CF.checked){
       temp=Number(TempValue.value);
       temp= temp *9/5 +32;
       Display.textContent= temp.toFixed(1)+ "℉"
     }else if(FC.checked){
      temp=Number(TempValue.value);
      temp= temp - 32 *5/9;
      Display.textContent=temp;
     }else{
      Display.textContent= `Please click on a button`
     }
     
}

// Looking at callback function
// example
function Bye(callback){{
  setTimeout(function(){
    console.log('YOu')
    callback()
  },3000)
}

}
function Good(){
  console.log('and me')

}
Bye(Good)

const namesis= ['You','Me','Us'];
namesis.map(capitalize);
console.log(namesis)

function capitalize(element,index,array){

  array[index]= element.charAt(0).toLowerCase()  + element.slice(1);
}
  let numbers=[1,2,3,4,50];
  numbers.forEach(display);

 function display(element,index,array){
  console.log(array);
  console.log(index);
  console.log(element);
 }
 function double(element,index,array){
  array[index]= element*2;
  let result=array[index];
  console.log(result)
 }
 numbers.forEach(double);
let fruits=['apple','banana','cashew','orange']
// fruits.forEach(Capitalize);
fruits.forEach(Uppercase);

function Capitalize(element,index,array){
  array[index]= element.charAt(0).toUpperCase() + element.slice(1);
  let result=array[index];
  console.log(result);
} 
function Uppercase(element,index,array){
  array[index]= element.toUpperCase();
  let result= array[index];
  console.log(result);

}
function Uppercase(element){
  let result= element.toUpperCase();
  console.log(result);
  return result
};

let datesArray= ['2022/12/4','2023/4/8','2024/9/6'];
datesArray.filter(changedArray);
function changedArray(element){
  let results= element.split('/');
  results= results.join('-')
  console.log(results);
  return `${results[2]} ${results[0]} ${results[1]}`
}









