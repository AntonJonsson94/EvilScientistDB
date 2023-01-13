"use strict";
const images = [
    "dist/evilscientist.png",
    "dist/evilscientist.png",
    "dist/evilscientist.png",
    "dist/evilscientist.png",
    "dist/evilscientist.png",
];
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
        nameList.innerHTML = Scientists[i].name;
        cardContainer.appendChild(newScientistCard);
        newScientistCard.appendChild(cardlist);
        cardlist.appendChild(nameList);
        newScientistCard.addEventListener("click", () => {
            printSelectedScientist(i);
        });
    }
}
printScientists();
function printSelectedScientist(index) {
    const selectedScientist = Scientists[index];
    const imageOfScientist = document.createElement("img");
    imageOfScientist.src = "images/evilscientist.png";
    let detailedInfoContainer = document.querySelector("#detailed-info");
    detailedInfoContainer.innerHTML = "";
    const selectedScientistCard = document.createElement("div");
    selectedScientistCard.setAttribute("id", "selected-scientist-card");
    const selectedScientistName = document.createElement("p");
    selectedScientistName.innerHTML = selectedScientist.name;
    const selectedScientistCardList = document.createElement("ul");
    const selectedScientistAge = document.createElement("p");
    selectedScientistAge.innerHTML =
        "Age" + "\n " + selectedScientist.age.toString();
    const selectedScientistHenchmen = document.createElement("p");
    selectedScientistHenchmen.innerHTML =
        "\nAmount of henchmen" + " " + selectedScientist.henchmen.toString();
    const selectedScientistInfo = document.createElement("p");
    selectedScientistInfo.innerHTML =
        "Backstory" + " " + selectedScientist.info;
    detailedInfoContainer.appendChild(imageOfScientist);
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
    if (newScientistName.value === "") {
        alert("Var god och fyll i all information!");
    }
    else {
        const newScientist = {
            name: newScientistName.value,
            age: parseInt(newScientistAge.value),
            henchmen: parseInt(newScientistHenchmen.value),
            info: newScientistInfo.value,
        };
        Scientists.push(newScientist);
        console.log(newScientistAge.value);
        console.log(Scientists);
        printScientists();
    }
});
