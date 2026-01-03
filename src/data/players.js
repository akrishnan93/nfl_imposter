// NFL Players Database by Difficulty
// Easy: Current NFL stars (2024-2025 season)
// Medium: Current players + historic legends
// Hard: Lesser-known players, backups, specialists

export const players = {
  easy: [
    // Quarterbacks
    "Patrick Mahomes",
    "Josh Allen",
    "Lamar Jackson",
    "Joe Burrow",
    "Jalen Hurts",
    "Dak Prescott",
    "Tua Tagovailoa",
    "Jordan Love",
    "C.J. Stroud",
    "Brock Purdy",

    // Wide Receivers
    "Ja'Marr Chase",
    "Tyreek Hill",
    "CeeDee Lamb",
    "Justin Jefferson",
    "A.J. Brown",
    "Amon-Ra St. Brown",
    "Davante Adams",
    "Stefon Diggs",
    "DK Metcalf",
    "Nico Collins",

    // Running Backs
    "Derrick Henry",
    "Saquon Barkley",
    "Josh Jacobs",
    "Breece Hall",
    "Jahmyr Gibbs",
    "Bijan Robinson",
    "De'Von Achane",
    "Jonathan Taylor",

    // Tight Ends
    "Travis Kelce",
    "George Kittle",
    "Mark Andrews",
    "Sam LaPorta",
    "Trey McBride",
    "T.J. Hockenson",

    // Defenders
    "Micah Parsons",
    "T.J. Watt",
    "Myles Garrett",
    "Nick Bosa",
    "Maxx Crosby",
    "Aaron Donald",
    "Sauce Gardner",
    "Patrick Surtain II",
    "Jalen Ramsey",
    "Roquan Smith",
    "Fred Warner",
    "Derwin James",
  ],

  medium: [
    // Current stars (same as easy)
    "Patrick Mahomes",
    "Josh Allen",
    "Travis Kelce",
    "Tyreek Hill",
    "Justin Jefferson",
    "Micah Parsons",
    "Lamar Jackson",
    "Joe Burrow",
    "Ja'Marr Chase",
    "Derrick Henry",

    // Historic Legends - Quarterbacks
    "Tom Brady",
    "Peyton Manning",
    "Joe Montana",
    "John Elway",
    "Dan Marino",
    "Brett Favre",
    "Drew Brees",
    "Aaron Rodgers",
    "Troy Aikman",
    "Terry Bradshaw",
    "Steve Young",
    "Russell Wilson",

    // Historic Legends - Skill Players
    "Jerry Rice",
    "Randy Moss",
    "Terrell Owens",
    "Barry Sanders",
    "Walter Payton",
    "Emmitt Smith",
    "LaDainian Tomlinson",
    "Adrian Peterson",
    "Marshawn Lynch",
    "Calvin Johnson",
    "Tony Gonzalez",
    "Rob Gronkowski",
    "Antonio Brown",
    "Julio Jones",
    "Odell Beckham Jr.",
    "DeAndre Hopkins",

    // Historic Legends - Defenders
    "Lawrence Taylor",
    "Ray Lewis",
    "Ed Reed",
    "Troy Polamalu",
    "Deion Sanders",
    "Reggie White",
    "J.J. Watt",
    "Von Miller",
    "Khalil Mack",
    "Richard Sherman",
    "Darrelle Revis",
    "Brian Urlacher",
    "Luke Kuechly",
    "Bobby Wagner",
  ],

  hard: [
    // Lesser-known current players
    "Gardner Minshew",
    "Jacoby Brissett",
    "Tyler Huntley",
    "Easton Stick",
    "Aidan O'Connell",
    "Desmond Ridder",
    "Bailey Zappe",
    "Tommy DeVito",
    "Joe Flacco",
    "Tyrod Taylor",

    // Depth receivers
    "Rashid Shaheed",
    "Khalil Shakir",
    "Dontayvion Wicks",
    "Jaxon Smith-Njigba",
    "Quentin Johnston",
    "Josh Downs",
    "Demarcus Robinson",
    "Mack Hollins",
    "Kadarius Toney",
    "Skyy Moore",

    // Backup RBs and specialists
    "Roschon Johnson",
    "Ty Chandler",
    "Ezekiel Elliott",
    "Clyde Edwards-Helaire",
    "Dameon Pierce",
    "Jaylen Warren",
    "Khalil Herbert",
    "Samaje Perine",

    // Lesser-known defenders
    "Nnamdi Madubuike",
    "Dexter Lawrence",
    "Quinnen Williams",
    "Jeffery Simmons",
    "Vita Vea",
    "Grady Jarrett",
    "Emmanuel Ogbah",
    "Harold Landry",
    "Danielle Hunter",
    "Brian Burns",
    "Javon Hargrave",
    "Daron Bland",
    "Devon Witherspoon",
    "Christian Gonzalez",
    "Joey Porter Jr.",
    "Kobie Turner",

    // Special teams / Kickers
    "Justin Tucker",
    "Harrison Butker",
    "Jake Moody",
    "Brandon Aubrey",
    "Tyler Bass",
  ],
};

export const getRandomPlayer = (difficulty) => {
  const playerList = players[difficulty];
  const randomIndex = Math.floor(Math.random() * playerList.length);
  return playerList[randomIndex];
};
