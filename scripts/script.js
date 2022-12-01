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
        name: "Gollumélock",
        Class: "Warlock",
        Spec: "Demonology",
        Race: "Dark Iron Dwarf",
        Faction: "Alliance", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: "9.2",
        Icon: "./assets/images/warlock.png"
    },

    {
        name: "Gollumémonk",
        Class: "Monk",
        Spec: "Brewmaster",
        Race: "Dwarf",
        Faction: "Alliance", // Horde or Alliance
        Type: "Tank", // DPS, Healer or Tank
        firstTimePlayed: "9.1.5",
        Icon: "./assets/images/monk.png"
    },

    {
        name: "Gollumévok",
        Class: "Evoker",
        Spec: "Devastation",
        Race: "Dracthyr",
        Faction: "Alliance", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: "10.0",
        Icon: "./assets/images/evoker.png"
    },

    {
        name: "Meguria",
        Class: "Priest",
        Spec: "Discipline",
        Race: "Draenei",
        Faction: "Alliance", // Horde or Alliance
        Type: "Healer", // DPS, Healer or Tank
        firstTimePlayed: "9.0",
        Icon: "./assets/images/priest.png"
    },

    {
        name: "Golluméo",
        Class: "Shaman",
        Spec: "Enhancement",
        Race: "Troll",
        Faction: "Horde", // Horde or Alliance
        Type: "DPS", // DPS, Healer or Tank
        firstTimePlayed: 8.3,
        Icon: "./assets/images/shaman.png"
    },

];

// function loremIpsum() {
//     return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ratione saepe dolorum, assumenda obcaecati ut non dolores corporis iusto eum molestiae, esse a necessitatibus deserunt sunt ad incidunt, voluptas laudantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illum accusantium natus ab corrupti quos ipsa magnam facere tenetur! Hic non dolorum quae at expedita? Commodi veritatis hic earum nihil?"
// }

function generateCards() {
    let main = document.getElementsByTagName("main")[0];
    let section = document.createElement("section");

    for (let character of myWowCollection) {
        // Create the article
        let article = document.createElement("article");
        article.className = character.name;

        // Create the picture
        let picture = document.createElement("img");
        picture.setAttribute("alt", character.Class);
        picture.setAttribute("src", character.Icon);
        picture.setAttribute("title", character.Class)
        article.appendChild(picture);

        // Create the title (character name)
        let title = document.createElement("h2");
        title.innerText = character.name;
        title.className = "name";
        article.appendChild(title);

        // Create the class
        let characterClass = document.createElement("h2");
        characterClass.innerText = character.Class;
        characterClass.className = "class";
        article.appendChild(characterClass);

        // Create the spec
        let spec = document.createElement("h3");
        spec.innerText = character.Spec;
        spec.className = "spec";
        article.appendChild(spec);

        // Create the race pin
        let race = document.createElement("h4")
        race.innerText = character.Race;
        race.className = "race";
        article.appendChild(race);

        // Create the faction pin
        let faction = document.createElement("h4")
        faction.innerText = character.Faction;
        faction.className = "faction";
        article.appendChild(faction);

        // Create the type pin
        let type = document.createElement("h4")
        type.innerText = character.Type;
        type.className = "type";
        article.appendChild(type);

        // Create date
        let date = document.createElement("p");
        date.className = "firstTimePlayed";
        date.innerText = "First time played: " + character.firstTimePlayed;
        article.appendChild(date);

        section.appendChild(article);
        main.appendChild(section);
    }
}

generateCards();
