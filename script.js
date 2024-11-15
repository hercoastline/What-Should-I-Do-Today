// Turku Edition activities
const turkuActivities = [
    "Drink something warm in the forest",
    "Go to Ikea",
    "Bake gingerbread",
    "Go for a walk around the city and watch the Churches",
    "Visit the Turku Cathedral",
    "Walk along the Aura River",
    "Visit the Turku Market Hall and try something new",
    "Play Shuffleboard at Galaxie Center",
    "Have a drink at Bar Rica",
    "Try a new beer at 5piste5",
    "Go for a beer and play boardgames at Hugo",
    "Go thrift shopping to SPR-kontti",
    "Visit Aboa Vetus & Ars Nova",
    "Check out today's events and attend something random",
    "Go for a walk to Virnamäenpuisto",
    "Visit a café and try something you've never ordered before"
];

// Archipelago Edition activities
const archipelagoActivities = [
    "Visit Pargas and take a walk up to Hundbanan/Koirabaana",
    "Visit Art Bank in Pargas",
    "Drink hot chocolate at Vepo Laavu in Pargas",
    "Go for a walk around Nagu harbor",
    "Take a ferry to Seili Island and explore",
    "Visit the Archipelago Centre Korpoström",
    "Have a cheese tasting at Jordkällaren in Pargas",
    "Explore the old town in Naantali",
    "Take a day trip to the Nauvo archipelago",
    "Have a picnic by the water in Parainen",
    "Visit a public sauna in the archipelago and take a dip",
    "Go hiking on a nature trail in Nauvo",
    "Visit a local craft store in the archipelago",
    "Take a spontaneous ferry ride and explore a new island"
];

// Default activities and current edition
let activities = turkuActivities;
let currentEdition = "Turku";

// Update activity list based on the selected edition
function setEdition(edition) {
    currentEdition = edition;
    activities = edition === "Turku" ? turkuActivities : archipelagoActivities;
    document.getElementById("activityIdea").textContent = ""; // Clear current activity
    document.getElementById("activityButton").textContent = "Tell me what to do";
}

// Show a random activity
function displayNewIdea() {
    const randomIdea = activities[Math.floor(Math.random() * activities.length)];
    document.getElementById("activityIdea").textContent = randomIdea;
    document.getElementById("activityButton").textContent = "Not today, give me another idea";
}

// Add event listeners for edition buttons
document.getElementById("turkuButton").addEventListener("click", () => setEdition("Turku"));
document.getElementById("archipelagoButton").addEventListener("click", () => setEdition("Archipelago"));
document.getElementById("activityButton").addEventListener("click", displayNewIdea);

