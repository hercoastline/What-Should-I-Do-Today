// List of activity ideas
const activities = [
    "Drink something warm in the forest",
    "Go to Ikea",
    "Bake something",
    "Go for a walk around the city",
    "Write a letter to a friend",
    "Go for a walk in nature",
    "Organize a small area in your home",
    "Listen to a new music playlist",
    "Plan a dream trip",
    "Take photos of things that make you smile",
];

// Find the button and the text area
const button = document.getElementById("activityButton");
const activityIdea = document.getElementById("activityIdea");

// Function to show a random idea
function displayNewIdea() {
    const randomIdea = activities[Math.floor(Math.random() * activities.length)];
    activityIdea.textContent = randomIdea;
    button.textContent = "Not today, give me another idea";
}

// Add a click event to the button
button.addEventListener("click", displayNewIdea);
