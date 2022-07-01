import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';

function displayExchangeRate(q, rate) {
  $(".exchangeOutput").text(`The exchange rate from USD to ${q} is ${rate}.`);
}