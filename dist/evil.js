"use strict";
const Scientists = [
    {
        name: "Hjalmar",
        age: 50,
        henchmen: 5000,
        info: "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
    {
        name: "Balder",
        age: 80,
        henchmen: 50000,
        info: "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
    {
        name: "Torbjörn",
        age: 45,
        henchmen: 6540,
        info: "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
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
    let detailedInfoContainer = document.querySelector("#detailed-info");
    detailedInfoContainer.innerHTML = "";
    const selectedScientistCard = document.createElement("div");
    selectedScientistCard.setAttribute("id", "selected-scientist-card");
    const nameCard = document.createElement("div");
    nameCard.setAttribute("class", "name");
    const ageCard = document.createElement("div");
    ageCard.setAttribute("class", "age");
    const henchmenCard = document.createElement("div");
    henchmenCard.setAttribute("class", "henchmen");
    const infoCard = document.createElement("div");
    infoCard.setAttribute("class", "infocard");
    const selectedScientistName = document.createElement("p");
    selectedScientistName.setAttribute("id", "name-tag");
    selectedScientistName.innerHTML = selectedScientist.name;
    const selectedScientistAge = document.createElement("p");
    selectedScientistAge.innerHTML =
        "Age:" + " " + selectedScientist.age.toString();
    const selectedScientistHenchmen = document.createElement("p");
    selectedScientistHenchmen.innerHTML =
        "Amount of henchmen:" + " " + selectedScientist.henchmen.toString();
    const selectedScientistInfo = document.createElement("p");
    selectedScientistInfo.innerHTML =
        "Backstory:" + " " + selectedScientist.info;
    detailedInfoContainer.appendChild(selectedScientistCard);
    selectedScientistCard.appendChild(nameCard);
    nameCard.appendChild(selectedScientistName);
    selectedScientistCard.appendChild(ageCard);
    ageCard.appendChild(selectedScientistAge);
    selectedScientistCard.appendChild(henchmenCard);
    henchmenCard.appendChild(selectedScientistHenchmen);
    selectedScientistCard.appendChild(infoCard);
    infoCard.appendChild(selectedScientistInfo);
}
console.log(Scientists);
const submitButton = document.querySelector("#addbutton");
const newScientistName = document.querySelector("#name");
const newScientistAge = document.querySelector("#age");
const newScientistHenchmen = document.querySelector("#henchmen");
const newScientistInfo = document.querySelector("#info");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (
        newScientistName.value === "" ||
        newScientistAge.value === "" ||
        newScientistHenchmen.value === "" ||
        newScientistInfo.value === ""
    ) {
        alert("Var god och fyll i all information!");
    } else {
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
