// Get references to toggle elements
const toggleSlider = document.getElementById("toggle-slider");
const turkuOption = document.getElementById("turkuOption");
const archipelagoOption = document.getElementById("archipelagoOption");

// Activities for Turku and Archipelago
const turkuActivities = [
    "Drink something warm in the forest",
    "Go to Ikea",
    "Visit the Turku Cathedral",
    "Walk along the Aura River",
    "Play Shuffleboard at Galaxie Center"
];

const archipelagoActivities = [
    "Visit Pargas and take a walk up to Hundbanan/Koirabaana",
    "Visit Art Bank in Pargas",
    "Drink hot chocolate at Vepo Laavu in Pargas",
    "Take a ferry to Seili Island"
];

// Default to Turku Edition
let activities = turkuActivities;

// Function to switch editions
function switchEdition(edition) {
    if (edition === "Turku") {
        toggleSlider.style.left = "0"; // Move slider to the left
        activities = turkuActivities; // Update activities
    } else {
        toggleSlider.style.left = "50%"; // Move slider to the right
        activities = archipelagoActivities; // Update activities
    }
    document.getElementById("activityIdea").textContent = ""; // Clear activity
    document.getElementById("activityButton").textContent = "Tell me what to do";
}

// Show a random activity
function displayNewIdea() {
    const randomIdea = activities[Math.floor(Math.random() * activities.length)];
    document.getElementById("activityIdea").textContent = randomIdea;
    document.getElementById("activityButton").textContent = "Not today, give me another idea";
}

// Add event listeners for edition switch
turkuOption.addEventListener("click", () => switchEdition("Turku"));
archipelagoOption.addEventListener("click", () => switchEdition("Archipelago"));
document.getElementById("activityButton").addEventListener("click", displayNewIdea);

// Add event listeners
editionToggle.addEventListener("change", updateEdition);
document.getElementById("activityButton").addEventListener("click", displayNewIdea);

