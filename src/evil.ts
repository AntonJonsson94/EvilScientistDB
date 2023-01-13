type evilScientist = {
    name: string;
    age: number;
    henchmen: number;
    info: string;
};

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
function printSelectedScientist(index: number) {
    // console.log("Clicked on index:" + index);
    //Spara selected scientist i en variabel
    const selectedScientist = Scientists[index];
    const imageOfScientist = document.createElement("img") as HTMLImageElement;
    imageOfScientist.src = "images/evilscientist.png";
    let detailedInfoContainer = document.querySelector(
        "#detailed-info"
    ) as HTMLDivElement;
    detailedInfoContainer.innerHTML = "";
    const selectedScientistCard = document.createElement(
        "div"
    ) as HTMLDivElement;

    selectedScientistCard.setAttribute("id", "selected-scientist-card");
    const selectedScientistName = document.createElement(
        "p"
    ) as HTMLParagraphElement;
    selectedScientistName.setAttribute("id", "name-tag");
    selectedScientistName.innerHTML = selectedScientist.name;

    const selectedScientistCardList = document.createElement(
        "ul"
    ) as HTMLUListElement;
    const selectedScientistAge = document.createElement(
        "p"
    ) as HTMLParagraphElement;
    selectedScientistAge.innerHTML =
        "Age" + " " + selectedScientist.age.toString();
    const selectedScientistHenchmen = document.createElement(
        "p"
    ) as HTMLParagraphElement;
    selectedScientistHenchmen.innerHTML =
        "Amount of henchmen" + " " + selectedScientist.henchmen.toString();
    const selectedScientistInfo = document.createElement(
        "p"
    ) as HTMLParagraphElement;
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

const submitButton = document.querySelector("#addbutton") as HTMLButtonElement;
const newScientistName = document.querySelector("#name") as HTMLInputElement;
const newScientistAge = document.querySelector("#age") as HTMLInputElement;
const newScientistHenchmen = document.querySelector(
    "#henchmen"
) as HTMLInputElement;
const newScientistInfo = document.querySelector("#info") as HTMLInputElement;

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
        const newScientist: evilScientist = {
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
