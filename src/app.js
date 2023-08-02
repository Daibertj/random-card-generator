/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".up").innerHTML = generarPintaRandom();
  document.querySelector(".card").innerHTML = generarNumeroRandom();
  document.querySelector("#down").innerHTML = generarPintaRandom();
};

let generarPintaRandom = () => {
  let pinta = ["♦", "♥", "♠", "♣"];
  let indexPinta = Math.floor(Math.random() * pinta.length);

  return pinta[indexPinta];
};

let generarNumeroRandom = () => {
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumero = Math.floor(Math.random() * numero.length);
  return numero[indexNumero];
};
