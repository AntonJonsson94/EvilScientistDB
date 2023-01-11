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
];

console.log(Scientists);

const form = document.querySelector("#form") as HTMLFormElement;
const newScientistName = document.querySelector("#name") as HTMLInputElement;
const newScientistAge = document.querySelector("#age") as HTMLInputElement;
const newScientistHenchmen = document.querySelector(
    "#henchmen"
) as HTMLInputElement;
const newScientistInfo = document.querySelector("#info") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const newScientist: evilScientist = {
        name: newScientistName.value,
        age: parseInt(newScientistAge.value),
        henchmen: parseInt(newScientistHenchmen.value),
        info: newScientistInfo.value,
    };
    Scientists.push(newScientist);
    console.log(Scientists);
});
