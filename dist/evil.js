"use strict";
const sounds = [];
const Scientists = [
    { name: "Hjalmar", age: 50, henchmen: 5000, info: "Stuff" },
    { name: "Balder", age: 80, henchmen: 50000, info: "Stuffs" },
    { name: "Torbjörn", age: 45, henchmen: 6540, info: "Likes beef" },
    {
        name: "Alfons",
        age: 65,
        henchmen: 100100100,
        info: "Born and raised in Dalarna",
    },
];
function printScientists() {
    let cardContainer = document.querySelector("#scientist-cards");
    cardContainer.innerHTML = "";
    for (let i = 0; i < Scientists.length; i++) {
        const newScientistCard = document.createElement("div");
        newScientistCard.setAttribute("id", "column");
        const cardlist = document.createElement("ul");
        const nameList = document.createElement("div");
        const cardButton = document.createElement("button");
        cardButton.innerHTML = "More details";
        nameList.innerHTML = Scientists[i].name;
        cardContainer.appendChild(newScientistCard);
        newScientistCard.appendChild(cardlist);
        cardlist.appendChild(nameList);
        nameList.appendChild(cardButton);
        cardButton.addEventListener("click", () => {
            printSelectedScientist(i);
        });
    }
}
printScientists();
function printSelectedScientist(index) {
    console.log("Clicked on index:" + index);
    const selectedScientist = Scientists[index];
    let detailedInfoContainer = document.querySelector("#detailed-info");
    detailedInfoContainer.innerHTML = "";
    const selectedScientistCard = document.createElement("div");
    selectedScientistCard.setAttribute("id", "selected-scientist-card");
    const selectedScientistName = document.createElement("h4");
    selectedScientistName.innerHTML = selectedScientist.name;
    const selectedScientistCardList = document.createElement("ul");
    const selectedScientistAge = document.createElement("div");
    selectedScientistAge.innerHTML = selectedScientist.age.toString();
    const selectedScientistHenchmen = document.createElement("li");
    selectedScientistHenchmen.innerHTML = selectedScientist.henchmen.toString();
    const selectedScientistInfo = document.createElement("li");
    selectedScientistInfo.innerHTML = selectedScientist.info;
    detailedInfoContainer.appendChild(selectedScientistCard);
    selectedScientistCard.appendChild(selectedScientistName);
    selectedScientistName.appendChild(selectedScientistCardList);
    selectedScientistCardList.appendChild(selectedScientistAge);
    selectedScientistCardList.appendChild(selectedScientistHenchmen);
    selectedScientistCardList.appendChild(selectedScientistInfo);
}
console.log(Scientists);
const submitButton = document.querySelector("#addbutton");
const newScientistName = document.querySelector("#name");
const newScientistAge = document.querySelector("#age");
const newScientistHenchmen = document.querySelector("#henchmen");
const newScientistInfo = document.querySelector("#info");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newScientist = {
        name: newScientistName.value,
        age: parseInt(newScientistAge.value),
        henchmen: parseInt(newScientistHenchmen.value),
        info: newScientistInfo.value,
    };
    Scientists.push(newScientist);
    console.log(Scientists);
    printScientists();
});
