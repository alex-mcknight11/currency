import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';

function clearFields() {
  $(".display").text("");
  $(".ammount").text("");
  $(".error").text("");
}

function getElements(response) {
  if (response.conversion_rate) {
    let currentExchangeRate =
      Math.round((response.conversion_rate + Number.EPSILON) * 100) / 100;
    let amount = $("#amount").val();
    $(".display").text(`${currentExchangeRate}`);
    $(".multiply").text(`${currentExchangeRate * amount}`);
  } else {
    $(".display").text("Error");
    $(".multiply").text("N/A");
    $(".error").text(
      `Error`
    );
  }
}

async function getExchangeRate(USD, secondCurrency) {
  const response = await Currency.getCurrency(USD,secondCurrency);
  getElements(response, USD, secondCurrency);
}

$(document).ready(function () {
  $("#currencyInfo").click(function () {
    let userCurrency = $("#secondEntry").val();
    clearFields();
    getExchangeRate("USD", userCurrency);
  });
});