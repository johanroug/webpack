import sum from './sum';
import * as $ from 'jquery';
import './styles/styles.scss';

const total = sum(10,33);

console.log(total);

$(function() {
  $('body').css('background', 'green');
});
