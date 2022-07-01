import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';
console.log(process.env.API_KEY);

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
  console.log(response);
  getElements(response, USD, secondCurrency);
}

$(document).ready(function () {
  console.log(document.querySelector('#currencyInfo'))
  $("#currencyInfo").click(function () {
    console.log('click');
    // let USD = $("#USD").val();
    let userCurrency = $("#secondEntry").val();
    clearFields();
    getExchangeRate("USD", userCurrency);
  });
});