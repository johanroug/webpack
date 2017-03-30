import * as $ from 'jquery';
import './styles/styles.scss';

import sum from './modules/sum';
import {Johan} from './modules/another';

const total = sum(10,33);

console.log(total);

var johan = new Johan;
johan.myFunc(10);

$(function() {
  $('body').css('background', 'green');
});
