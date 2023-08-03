/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let down = document.querySelector("#down");
  let up = document.querySelector("#up");
  let num = document.querySelector("#num");
  let pinta = generarPintaRandom();
  num.innerHTML = generarNumeroRandom();
  down.innerHTML = pinta;
  up.innerHTML = pinta;
  console.log();

  if (up.textContent == "♦" || up.textContent == "♥") {
    up.style.color = "red";
    console.log("holaaaaaa");
  } else {
    up.style.color = "black";
  }

  if (down.textContent == "♦" || down.textContent == "♥") {
    down.style.color = "red";
    console.log("holaaaaaa");
  } else {
    down.style.color = "black";
  }
};
let generarPintaRandom = () => {
  let pinta = ["♦", "♥", "♠", "♣"];
  let indexPinta = Math.floor(Math.random() * pinta.length);
  return pinta[indexPinta];
};

let generarNumeroRandom = () => {
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumero = Math.floor(Math.random() * numero.length);
  return numero[indexNumero];
};
