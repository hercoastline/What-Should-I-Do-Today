// Turku Edition activities
const turkuActivities = [
    "Drink something warm in the forest",
    "Go to Ikea",
    "Bake gingerbread",
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
    "Explore the old town in Naantali",
    "Take a ferry to Seili Island",
    "Visit the Archipelago Centre Korpoström",
    "Have a cheese tasting at Jordkällaren in Pargas",
    "Explore Nauvo Harbor",
    "Take a day trip to the Nauvo archipelago",
    "Have a picnic by the water in Parainen",
    "Visit a public sauna in the archipelago and take a dip",
    "Go hiking on a nature trail in Nauvo",
    "Visit a local craft store in the archipelago",
    "Take a spontaneous ferry ride and explore a new island"
];

// Default activities and current edition
let activities = turkuActivities; // Default to Turku Edition
const editionToggle = document.getElementById("editionToggle");
const currentEditionLabel = document.getElementById("currentEdition");

// Update the activities based on toggle state
function updateEdition() {
    if (editionToggle.checked) {
        activities = archipelagoActivities;
        currentEditionLabel.textContent = "Archipelago Edition";
    } else {
        activities = turkuActivities;
        currentEditionLabel.textContent = "Turku Edition";
    }
    document.getElementById("activityIdea").textContent = ""; // Clear current activity
    document.getElementById("activityButton").textContent = "Tell me what to do";
}

// Show a random activity
function displayNewIdea() {
    const randomIdea = activities[Math.floor(Math.random() * activities.length)];
    document.getElementById("activityIdea").textContent = randomIdea;
    document.getElementById("activityButton").textContent = "Not today, give me another idea";
}

// Add event listeners
editionToggle.addEventListener("change", updateEdition);
document.getElementById("activityButton").addEventListener("click", displayNewIdea);

