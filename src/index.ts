import * as $ from 'jquery';
import './styles/styles.scss';

import sum from './modules/sum';
import {Another} from './modules/another';

const total = sum(10,33);

console.log(total);

// jquery use
$(function() {
  $('body').css('background', 'green');
});


let indexAnother = new Another;
indexAnother.myFunc(22); // use property from "another"" class

class Arendse extends Another {
  constructor() {
    super();
    console.log(this.another2); // use super and this to acces "another2" property from "Another" class
    this.myFunc(22, 1, 4, 5, 10);
  }
}

new Arendse;
