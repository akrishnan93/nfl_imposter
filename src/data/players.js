// NFL Players Database by Difficulty
// Easy: Current NFL stars (2024-2025 season)
// Medium: Current players + historic legends
// Hard: Lesser-known players, backups, specialists

import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = 'usedPlayers';

// Get used players from cache
const getUsedPlayers = async (difficulty) => {
  try {
    const cache = await AsyncStorage.getItem(CACHE_KEY);
    const parsed = cache ? JSON.parse(cache) : {};
    return parsed[difficulty] || [];
  } catch {
    return [];
  }
};

// Save used player to cache
const saveUsedPlayer = async (difficulty, playerName) => {
  try {
    const cache = await AsyncStorage.getItem(CACHE_KEY);
    const parsed = cache ? JSON.parse(cache) : {};
    const used = parsed[difficulty] || [];
    used.push(playerName);

    // Reset if all players used
    const totalPlayers = players[difficulty].length;
    if (used.length >= totalPlayers) {
      parsed[difficulty] = [];
    } else {
      parsed[difficulty] = used;
    }

    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
  } catch (e) {
    console.log('Cache save error:', e);
  }
};

export const players = {
  easy: [
    // Quarterbacks
    { name: "Patrick Mahomes", position: "Quarterback" },
    { name: "Josh Allen", position: "Quarterback" },
    { name: "Lamar Jackson", position: "Quarterback" },
    { name: "Joe Burrow", position: "Quarterback" },
    { name: "Jalen Hurts", position: "Quarterback" },
    { name: "Dak Prescott", position: "Quarterback" },
    { name: "Tua Tagovailoa", position: "Quarterback" },
    { name: "Jordan Love", position: "Quarterback" },
    { name: "C.J. Stroud", position: "Quarterback" },
    { name: "Brock Purdy", position: "Quarterback" },

    // Wide Receivers
    { name: "Ja'Marr Chase", position: "Wide Receiver" },
    { name: "Tyreek Hill", position: "Wide Receiver" },
    { name: "CeeDee Lamb", position: "Wide Receiver" },
    { name: "Justin Jefferson", position: "Wide Receiver" },
    { name: "A.J. Brown", position: "Wide Receiver" },
    { name: "Amon-Ra St. Brown", position: "Wide Receiver" },
    { name: "Davante Adams", position: "Wide Receiver" },
    { name: "Stefon Diggs", position: "Wide Receiver" },
    { name: "DK Metcalf", position: "Wide Receiver" },
    { name: "Nico Collins", position: "Wide Receiver" },

    // Running Backs
    { name: "Derrick Henry", position: "Running Back" },
    { name: "Saquon Barkley", position: "Running Back" },
    { name: "Josh Jacobs", position: "Running Back" },
    { name: "Breece Hall", position: "Running Back" },
    { name: "Jahmyr Gibbs", position: "Running Back" },
    { name: "Bijan Robinson", position: "Running Back" },
    { name: "De'Von Achane", position: "Running Back" },
    { name: "Jonathan Taylor", position: "Running Back" },

    // Tight Ends
    { name: "Travis Kelce", position: "Tight End" },
    { name: "George Kittle", position: "Tight End" },
    { name: "Mark Andrews", position: "Tight End" },
    { name: "Sam LaPorta", position: "Tight End" },
    { name: "Trey McBride", position: "Tight End" },
    { name: "T.J. Hockenson", position: "Tight End" },

    // Defenders
    { name: "Micah Parsons", position: "Defender" },
    { name: "T.J. Watt", position: "Defender" },
    { name: "Myles Garrett", position: "Defender" },
    { name: "Nick Bosa", position: "Defender" },
    { name: "Maxx Crosby", position: "Defender" },
    { name: "Aaron Donald", position: "Defender" },
    { name: "Sauce Gardner", position: "Defender" },
    { name: "Patrick Surtain II", position: "Defender" },
    { name: "Jalen Ramsey", position: "Defender" },
    { name: "Roquan Smith", position: "Defender" },
    { name: "Fred Warner", position: "Defender" },
    { name: "Derwin James", position: "Defender" },
  ],

  medium: [
    // Current stars
    { name: "Patrick Mahomes", position: "Quarterback", category: "Current Star" },
    { name: "Josh Allen", position: "Quarterback", category: "Current Star" },
    { name: "Travis Kelce", position: "Tight End", category: "Current Star" },
    { name: "Tyreek Hill", position: "Wide Receiver", category: "Current Star" },
    { name: "Justin Jefferson", position: "Wide Receiver", category: "Current Star" },
    { name: "Micah Parsons", position: "Defender", category: "Current Star" },
    { name: "Lamar Jackson", position: "Quarterback", category: "Current Star" },
    { name: "Joe Burrow", position: "Quarterback", category: "Current Star" },
    { name: "Ja'Marr Chase", position: "Wide Receiver", category: "Current Star" },
    { name: "Derrick Henry", position: "Running Back", category: "Current Star" },

    // Historic Legends - Quarterbacks
    { name: "Tom Brady", position: "Quarterback", category: "Legend" },
    { name: "Peyton Manning", position: "Quarterback", category: "Legend" },
    { name: "Joe Montana", position: "Quarterback", category: "Legend" },
    { name: "John Elway", position: "Quarterback", category: "Legend" },
    { name: "Dan Marino", position: "Quarterback", category: "Legend" },
    { name: "Brett Favre", position: "Quarterback", category: "Legend" },
    { name: "Drew Brees", position: "Quarterback", category: "Legend" },
    { name: "Aaron Rodgers", position: "Quarterback", category: "Legend" },
    { name: "Troy Aikman", position: "Quarterback", category: "Legend" },
    { name: "Terry Bradshaw", position: "Quarterback", category: "Legend" },
    { name: "Steve Young", position: "Quarterback", category: "Legend" },
    { name: "Russell Wilson", position: "Quarterback", category: "Legend" },

    // Historic Legends - Skill Players
    { name: "Jerry Rice", position: "Wide Receiver", category: "Legend" },
    { name: "Randy Moss", position: "Wide Receiver", category: "Legend" },
    { name: "Terrell Owens", position: "Wide Receiver", category: "Legend" },
    { name: "Barry Sanders", position: "Running Back", category: "Legend" },
    { name: "Walter Payton", position: "Running Back", category: "Legend" },
    { name: "Emmitt Smith", position: "Running Back", category: "Legend" },
    { name: "LaDainian Tomlinson", position: "Running Back", category: "Legend" },
    { name: "Adrian Peterson", position: "Running Back", category: "Legend" },
    { name: "Marshawn Lynch", position: "Running Back", category: "Legend" },
    { name: "Calvin Johnson", position: "Wide Receiver", category: "Legend" },
    { name: "Tony Gonzalez", position: "Tight End", category: "Legend" },
    { name: "Rob Gronkowski", position: "Tight End", category: "Legend" },
    { name: "Antonio Brown", position: "Wide Receiver", category: "Legend" },
    { name: "Julio Jones", position: "Wide Receiver", category: "Legend" },
    { name: "Odell Beckham Jr.", position: "Wide Receiver", category: "Legend" },
    { name: "DeAndre Hopkins", position: "Wide Receiver", category: "Legend" },

    // Historic Legends - Defenders
    { name: "Lawrence Taylor", position: "Defender", category: "Legend" },
    { name: "Ray Lewis", position: "Defender", category: "Legend" },
    { name: "Ed Reed", position: "Defender", category: "Legend" },
    { name: "Troy Polamalu", position: "Defender", category: "Legend" },
    { name: "Deion Sanders", position: "Defender", category: "Legend" },
    { name: "Reggie White", position: "Defender", category: "Legend" },
    { name: "J.J. Watt", position: "Defender", category: "Legend" },
    { name: "Von Miller", position: "Defender", category: "Legend" },
    { name: "Khalil Mack", position: "Defender", category: "Legend" },
    { name: "Richard Sherman", position: "Defender", category: "Legend" },
    { name: "Darrelle Revis", position: "Defender", category: "Legend" },
    { name: "Brian Urlacher", position: "Defender", category: "Legend" },
    { name: "Luke Kuechly", position: "Defender", category: "Legend" },
    { name: "Bobby Wagner", position: "Defender", category: "Legend" },
  ],

  hard: [
    // Lesser-known current players
    { name: "Gardner Minshew", position: "Quarterback" },
    { name: "Jacoby Brissett", position: "Quarterback" },
    { name: "Tyler Huntley", position: "Quarterback" },
    { name: "Easton Stick", position: "Quarterback" },
    { name: "Aidan O'Connell", position: "Quarterback" },
    { name: "Desmond Ridder", position: "Quarterback" },
    { name: "Bailey Zappe", position: "Quarterback" },
    { name: "Tommy DeVito", position: "Quarterback" },
    { name: "Joe Flacco", position: "Quarterback" },
    { name: "Tyrod Taylor", position: "Quarterback" },

    // Depth receivers
    { name: "Rashid Shaheed", position: "Wide Receiver" },
    { name: "Khalil Shakir", position: "Wide Receiver" },
    { name: "Dontayvion Wicks", position: "Wide Receiver" },
    { name: "Jaxon Smith-Njigba", position: "Wide Receiver" },
    { name: "Quentin Johnston", position: "Wide Receiver" },
    { name: "Josh Downs", position: "Wide Receiver" },
    { name: "Demarcus Robinson", position: "Wide Receiver" },
    { name: "Mack Hollins", position: "Wide Receiver" },
    { name: "Kadarius Toney", position: "Wide Receiver" },
    { name: "Skyy Moore", position: "Wide Receiver" },

    // Backup RBs and specialists
    { name: "Roschon Johnson", position: "Running Back" },
    { name: "Ty Chandler", position: "Running Back" },
    { name: "Ezekiel Elliott", position: "Running Back" },
    { name: "Clyde Edwards-Helaire", position: "Running Back" },
    { name: "Dameon Pierce", position: "Running Back" },
    { name: "Jaylen Warren", position: "Running Back" },
    { name: "Khalil Herbert", position: "Running Back" },
    { name: "Samaje Perine", position: "Running Back" },

    // Lesser-known defenders
    { name: "Nnamdi Madubuike", position: "Defender" },
    { name: "Dexter Lawrence", position: "Defender" },
    { name: "Quinnen Williams", position: "Defender" },
    { name: "Jeffery Simmons", position: "Defender" },
    { name: "Vita Vea", position: "Defender" },
    { name: "Grady Jarrett", position: "Defender" },
    { name: "Emmanuel Ogbah", position: "Defender" },
    { name: "Harold Landry", position: "Defender" },
    { name: "Danielle Hunter", position: "Defender" },
    { name: "Brian Burns", position: "Defender" },
    { name: "Javon Hargrave", position: "Defender" },
    { name: "Daron Bland", position: "Defender" },
    { name: "Devon Witherspoon", position: "Defender" },
    { name: "Christian Gonzalez", position: "Defender" },
    { name: "Joey Porter Jr.", position: "Defender" },
    { name: "Kobie Turner", position: "Defender" },

    // Special teams / Kickers
    { name: "Justin Tucker", position: "Kicker" },
    { name: "Harrison Butker", position: "Kicker" },
    { name: "Jake Moody", position: "Kicker" },
    { name: "Brandon Aubrey", position: "Kicker" },
    { name: "Tyler Bass", position: "Kicker" },
  ],
};

export const getRandomPlayer = async (difficulty) => {
  const playerList = players[difficulty];
  const usedPlayers = await getUsedPlayers(difficulty);

  // Filter out used players
  const available = playerList.filter(p => !usedPlayers.includes(p.name));

  // If all used (shouldn't happen but safety), use full list
  const pool = available.length > 0 ? available : playerList;

  const randomIndex = Math.floor(Math.random() * pool.length);
  const selected = pool[randomIndex];

  // Save to cache
  await saveUsedPlayer(difficulty, selected.name);

  return selected;
};

export const getCategoryLabel = (difficulty, player) => {
  if (difficulty === 'easy') return 'Current Star';
  if (difficulty === 'hard') return 'Lesser-known';
  // For medium, check if player has category property
  return player.category || 'Current Star';
};
