import * as $ from 'jquery';
import './styles/styles.scss';
import sum from './modules/sum';
import {Another} from './modules/another';

var johan = new Promise((resolve, reject) => {
  let test = "hej";
  resolve(test);
});


johan.then(() => {
  console.log("det virker");
});

/************************** why let ***************************/
// https://basarat.gitbooks.io/typescript/docs/let.html
// function scobe - often an error
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

//Block scobe - Use let to get a true unique element
let foo2 = 123;
if (true) {
    let foo2 = 456;
}
console.log(foo2); // 123


/************************** Using jquery *************************/
/*$(function() {
  $('body').css('background', 'orange');
});*/


/************************** Use outside method not in class ******/
const total = sum(10,33);
console.log(total);


/************************** Use outside class method *************/
let indexAnother = new Another;
indexAnother.myFunc(22);


/******** Use outside same class method in class with super *******/
class Arendse extends Another {
  constructor() {
    super();
    console.log(this.another2);
  }
}

new Arendse;


/******** Rest argument, use unlimited arguments *******/
class Arendse2{
  constructor() {
    this.myFunc(22, 1, 4, 5, 10);
  }
  myFunc(number, ...theRest) {
    console.log(number);
    console.log(theRest);
    let total = 0;
    for( let i = 0; i < theRest.length; i ++) {
      total +=  theRest[i];
    }
    console.log(total);
  }
}

new Arendse2;


/******** "For of" gives a result you expect, compared to "for in" *******/
let items = [4,6,7,9];
for (let item of items) { // Use on on arrau and string
  console.log(item); // 4, 6, 7, 9
}                    // for in would give 0, 1, 2, 3


/*************************** String Interpolation ************************/
let lyrics = 'Never gonna give you up';
let html = `<div>${lyrics}</div>`;
console.log(html);
