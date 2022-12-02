let thingsILike = [
    "World of Warcraft",
    "League of Legends",
    "Cooking",
    "Reading",
    "TV Series",
    "Animes",
    "Metal Music",
    "Coding",
    "PHP",
    "Beer",
];

const myWowCollection = [
    {
        Name: "Gollumélock",
        Class: "Warlock",
        Spec: "Demonology",
        Race: "Dark Iron Dwarf",
        Faction: "Alliance", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: "9.2",
        Icon: "./assets/images/warlock.png"
    },

    {
        Name: "Gollumémonk",
        Class: "Monk",
        Spec: "Brewmaster",
        Race: "Dwarf",
        Faction: "Alliance", // Horde or Alliance
        Type: "Tank", // DPS, Healer or Tank
        firstTimePlayed: "9.1.5",
        Icon: "./assets/images/monk.png"
    },

    {
        Name: "Gollumévok",
        Class: "Evoker",
        Spec: "Devastation",
        Race: "Dracthyr",
        Faction: "Alliance", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: "10.0",
        Icon: "./assets/images/evoker.png"
    },

    {
        Name: "Meguria",
        Class: "Priest",
        Spec: "Discipline",
        Race: "Draenei",
        Faction: "Alliance", // Horde or Alliance
        Type: "Healer", // DPS, Healer or Tank
        firstTimePlayed: "9.0",
        Icon: "./assets/images/priest.png"
    },

    {
        Name: "Golluméo",
        Class: "Shaman",
        Spec: "Enhancement",
        Race: "Troll",
        Faction: "Horde", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: 8.3,
        Icon: "./assets/images/shaman.png"
    },

];

myWowCollection.sort(() => Math.random() - 0.5);

function generateCards() {
    let main = document.getElementsByTagName("main")[0];
    let section = document.createElement("section");

    for (let character of myWowCollection) {
        // Create the article
        let article = document.createElement("article");
        article.className = character.Name;

        // Create the title (character Name)
        let title = document.createElement("h2");
        title.innerText = character.Name;
        title.className = "name" + " " + character.Faction;
        article.appendChild(title);

        //Generate the flipped shadows text
        let flipped = document.createElement("h2");
        flipped.innerText = character.Name;
        flipped.className = "backwards";
        article.appendChild(flipped);

        // Create the picture
        let picture = document.createElement("img");
        picture.setAttribute("alt", character.Class);
        picture.setAttribute("src", character.Icon);
        picture.setAttribute("title", character.Class);
        article.appendChild(picture);

        // create the container for the following infos
        let container = document.createElement("div");
        container.className = "container";
        article.appendChild(container);

        // Create the character class
        let characterClass = document.createElement("h2");
        characterClass.innerText = character.Class;
        characterClass.className = "class";
        characterClass.setAttribute("title", "Class");
        container.appendChild(characterClass);

        // Create the spec
        let spec = document.createElement("h2");
        spec.innerText = character.Spec;
        spec.className = "spec";
        spec.setAttribute("title", "Specialization");
        container.appendChild(spec);

        // Create the race pin
        let race = document.createElement("h2")
        race.innerText = character.Race;
        race.className = "race";
        race.setAttribute("title", "Race");
        container.appendChild(race);

        // Create the faction pin
        let faction = document.createElement("h2")
        faction.innerText = character.Faction;
        faction.className = "faction";
        faction.setAttribute("title", "Faction");
        container.appendChild(faction);

        // Create the type pin
        let type = document.createElement("h2");
        type.innerText = character.Type;
        type.className = "type";
        type.setAttribute("title", "Type");
        container.appendChild(type);

        // Create date
        let date = document.createElement("h2");
        date.className = "firstTimePlayed";
        date.setAttribute("title", "First time played");
        date.innerText = character.firstTimePlayed;
        container.appendChild(date);

        section.appendChild(article);
        main.appendChild(section);


    }
}

generateCards();
