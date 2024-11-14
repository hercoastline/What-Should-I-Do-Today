// List of activity ideas
const activities = [
    "Drink something warm in the forest",
    "Go to Ikea",
    "Bake gingerbread",
    "Go for a walk around the city",
    "Write a thank-you letter to someone you appreciate",
    "Go for a walk in nature",
    "Bake something new",
    "Cook dinner using seasonal ingredients",
    "Plan a trip for the future",
    "Plan a trip for the future",
    "Visit a public sauna and have a dip in the sea",
    "Go bowling",
    "Go play billiard",
    "Hike up to the top of Hirvensalo",
    "Visit a local café and try something you've never ordered before",
    "Take a day trip to Naantali and visit the old town",
    "Walk around Moomin World",
    "Visit the a museum",
    "Try making your own glögi (mulled wine)",
    "Go thrift shopping to SPR-kontti",
    "Have a spa day at home – facemasks, candles, and relaxing music",
    "Visit Ruissalo and enjoy the trails or botanical garden",
    "Go to the boardgame bar",
    "Visit Ruissalo and enjoy the trails or botanical garden",
    "Eat outdoors - pack something warm and head outdoors",
    "Go bouldering",
    "Play padel",
    "Play badminton",
    "Play squash",
    "Go to the trampoline park",
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
