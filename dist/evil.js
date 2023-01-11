"use strict";
const sounds = [];
const Scientists = [
    { name: "Hjalmar", age: 50, henchmen: 5000, info: "Stuff" },
    { name: "Balder", age: 80, henchmen: 50000, info: "Stuffs" },
];
console.log(Scientists);
const form = document.querySelector("#form");
const newScientistName = document.querySelector("#name");
const newScientistAge = document.querySelector("#age");
const newScientistHenchmen = document.querySelector("#henchmen");
const newScientistInfo = document.querySelector("#info");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newScientist = {
        name: newScientistName.value,
        age: parseInt(newScientistAge.value),
        henchmen: parseInt(newScientistHenchmen.value),
        info: newScientistInfo.value,
    };
    Scientists.push(newScientist);
    console.log(Scientists);
});
