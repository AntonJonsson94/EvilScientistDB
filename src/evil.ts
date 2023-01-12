type evilScientist = {
    name: string;
    age: number;
    henchmen: number;
    info: string;
};

const sounds: string[] = [];

const Scientists: evilScientist[] = [
    { name: "Hjalmar", age: 50, henchmen: 5000, info: "Stuff" },
    { name: "Balder", age: 80, henchmen: 50000, info: "Stuffs" },
    { name: "Torbjörn", age: 45, henchmen: 6540, info: "Likes beef" },
    {
        name: "Alfons",
        age: 65,
        henchmen: 100_100_100,
        info: "Born and raised in Dalarna",
    },
];

function printScientists() {
    let cardContainer = document.querySelector(
        "#scientist-cards"
    ) as HTMLDivElement;

    cardContainer.innerHTML = "";
    for (let i = 0; i < Scientists.length; i++) {
        const newScientistCard = document.createElement(
            "div"
        ) as HTMLDivElement;
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
function printSelectedScientist(index: number) {
    console.log("Clicked on index:" + index);
    //Spara selected scientist i en variabel
    const selectedScientist = Scientists[index];

    let detailedInfoContainer = document.querySelector(
        "#detailed-info"
    ) as HTMLDivElement;
    detailedInfoContainer.innerHTML = "";

    const selectedScientistCard = document.createElement("div") as HTMLElement;
    selectedScientistCard.setAttribute("id", "selected-scientist-card");
    const selectedScientistName = document.createElement("h4");
    selectedScientistName.innerHTML = selectedScientist.name;
    const selectedScientistCardList = document.createElement(
        "ul"
    ) as HTMLUListElement;

    const selectedScientistAge = document.createElement(
        "div"
    ) as HTMLDivElement;
    selectedScientistAge.innerHTML = selectedScientist.age.toString();
    const selectedScientistHenchmen = document.createElement(
        "li"
    ) as HTMLLIElement;
    selectedScientistHenchmen.innerHTML = selectedScientist.henchmen.toString();
    const selectedScientistInfo = document.createElement("li") as HTMLLIElement;
    selectedScientistInfo.innerHTML = selectedScientist.info;

    detailedInfoContainer.appendChild(selectedScientistCard);
    selectedScientistCard.appendChild(selectedScientistName);
    selectedScientistName.appendChild(selectedScientistCardList);
    selectedScientistCardList.appendChild(selectedScientistAge);
    selectedScientistCardList.appendChild(selectedScientistHenchmen);
    selectedScientistCardList.appendChild(selectedScientistInfo);

    //hej

    // let detailedCardContainer = document.querySelector(
    //     "#detailed-info"
    // ) as HTMLDivElement;
    // detailedCardContainer.innerHTML = "";
    // for (let i = 0; i < Scientists.length; i++)
    //     const selectedScientistCard = document.createElement(
    //         "div"
    //     ) as HTMLDivElement;
    // selectedScientistCard.setAttribute("id", "selected-card");
    // const selectedScientistName = document.createElement("h3");
    // selectedScientistName.innerHTML = Scientists[index].name;
    // selectedCardList = document.createElement("ul");
    // selectedScientistAgeList = document.createElement("li");
    // selectedScientistHenchmenList = document.createElement("li");
    // selectedScientistInfoList = document.createElement("li");
    // detailedCardContainer.appendChild(selec);
    //
}
console.log(Scientists);

const submitButton = document.querySelector("#addbutton") as HTMLButtonElement;
const newScientistName = document.querySelector("#name") as HTMLInputElement;
const newScientistAge = document.querySelector("#age") as HTMLInputElement;
const newScientistHenchmen = document.querySelector(
    "#henchmen"
) as HTMLInputElement;
const newScientistInfo = document.querySelector("#info") as HTMLInputElement;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newScientist: evilScientist = {
        name: newScientistName.value,
        age: parseInt(newScientistAge.value),
        henchmen: parseInt(newScientistHenchmen.value),
        info: newScientistInfo.value,
    };
    Scientists.push(newScientist);
    console.log(Scientists);
    printScientists();
});
