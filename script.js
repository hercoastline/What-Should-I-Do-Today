// Activities for Turku and Archipelago
const turkuActivities = [
    "Go to Ikea",
    "Go for a walk around the city and watch the Churches",
    "Cook dinner at home using seasonal ingredients",
    "Visit a public sauna, like Järvelän Avanto, and have a dip in the sea",
    "Go bowling",
    "Go play billiard",
    "Play Shuffleboard at Galaxie Center",
    "Hike up to the top of Hirvensalo",
    "Visit a café and try something you've never ordered before",
    "Take a day trip to Naantali and visit the old town",
    "Take a day trip to Naantali and walk the Path of Love",
    "Go to Naantali and walk around Moomin World",
    "Visit a museum",
    "Try making your own glögi (mulled wine) at home",
    "Go thrift shopping to SPR-kontti",
    "Have a spa day at home – facemasks, candles, and relaxing music",
    "Visit Ruissalo and enjoy the trails or botanical garden",
    "Go to Happy Badger and play a new boardgame",
    "Eat outdoors - pack something warm and head to nature",
    "Go bouldering",
    "Play padel",
    "Play badminton",
    "Play squash",
    "Go to the trampoline park",
    "Have a drink at Bar Rica",
    "Have a drink at Arvo",
    "Try a new beer at 5piste5",
    "Go for a beer and play boardgames at Hugo",
    "Walk around the city and go for a beer at a random pub",
    "Go for a walk around Katariinanlaakso",
    "Go for a drive and listen to a podcast",
    "Go for a drive and get a milkshake from Burger King",
    "Go for a walk around Luolavuori",
    "Visit Piispanlinnan rauniot",
    "Enjoy the day/evening at Kakola Spa",
    "Eat dinner at a new restaurant",
    "Go for a walk around Littoistenjärvi",
    "Make your own sushi",
    "Throw a mexican evening, tortillas from scratch and mexican beer for everyone!",
    "Play UNO",
    "Visit the Turku Market Hall and try something new",
    "Build a puzzle together",
    "Visit the Turku Cathedral",
    "Walk along the Aura River",
    "Walk along Nummenranta and Koroistenniemi",
    "Go for a walk to Virnamäenpuisto",
    "Visit Aboa Vetus & Ars Nova",
    "Bake cookies at home",
    "Take a spontaneous trip to a nearby town",
    "Take a spontaneous trip to Helsinki",
    "Go ice skating if there's an available rink",
    "Have a beer tasting at home",
    "Make homemade hot chocolate with unique flavors",
    "Make your own hot sauce or jam",
    "Listen to a podcast while going for a walk",
    "Research local history and find historic sites to visit",
    "Visit a nearby town for lunch or dinner",
    "Go geocaching around the city",
    "Check out todays events and attend something random",
    "Have a cheese tasting night with different types of cheese",
    "Go to Pargas and visit Jordkällaren to buy extremely good cheese",
    "Visit a flower shop and pick a plant to take home",
    "Find an ice cream place and try a new flavor combination",
    "Visit an antique shop and explore unique items",
    "Visit Pargas and drink hot chocolate at Vepo Laavu",
    "Take a drive without a destination and see where you end up",
    "Go for a walk around Portsa, stop at Kaos Thrift and ARVO",
    "Go for a walk to the Turku Cemetery",
];

const archipelagoActivities = [
    "Take a walk up to Hundbanan/Koirabaana",
    "Visit Art Bank",
    "Drink hot chocolate at Vepo Laavu",
    "Drink something warm in the forest",
    "Go for a walk to Munkviken Nature Path",
    "Eat cake at café Hallonblad",
    "Eat pie at café Nathalie",
    "Go for a drink at Hunger & Törst",
    "Play billiard at Harrys or Pireus",
    "Have a spa day at home – facemasks, candles, and relaxing music",
    "Do an evening walk in a forest with a flashlight",
    "Visit Jordkällaren to buy extremely good cheese",
    "Go geocaching around the city",
    "Listen to a podcast while going for a walk",
    "Make homemade hot chocolate with unique flavors",
    "Try a new tea blend at home",
    "Take a nature walk and collect leaves or stones for crafting",
    "Play UNO",
    "Make pizza from scratch",
    "Make something out of clay",
    "Paint candles",
    "Visit Piispanlinnan rauniot",
    "Eat outdoors - pack something warm and head to nature",
    "Go for a drive and listen to a podcast",
    "Try making your own glögi (mulled wine) at home",
];

const homeActivities = [
    "Bake cookies at home",
    "Host a mini cook-off with friends",
    "Do a puzzle",
    "Paint candles",
    "Write a thank-you letter to someone you appreciate",
    "Have a cozy movie night with blankets and popcorn",
    "Make homemade hot chocolate",
    "Try knitting or crocheting a simple project",
    "Organize a small area of your home",
    "Start a journal and write about your day"
];

// Default activities and slider position
let activities = turkuActivities;
const toggleSlider = document.getElementById("toggle-slider");
const turkuOption = document.getElementById("turkuOption");
const archipelagoOption = document.getElementById("archipelagoOption");
const homeOption = document.getElementById("homeOption");

// Function to switch editions
function switchEdition(edition) {
    if (edition === "Turku") {
        toggleSlider.style.left = "0"; // Slider to the first position
        activities = turkuActivities;
    } else if (edition === "Archipelago") {
        toggleSlider.style.left = "33.33%"; // Slider to the middle position
        activities = archipelagoActivities;
    } else if (edition === "Home") {
        toggleSlider.style.left = "66.66%"; // Slider to the third position
        activities = homeActivities;
    }
    document.getElementById("activityIdea").textContent = ""; // Clear activity
    document.getElementById("activityButton").textContent = "Tell me what to do";
}

// Show a random activity
function displayNewIdea() {
    const randomIdea = activities[Math.floor(Math.random() * activities.length)];
    document.getElementById("activityIdea").textContent = randomIdea;
    document.getElementById("activityButton").textContent = "Give me another idea :)";
}

// Add event listeners for edition switches
turkuOption.addEventListener("click", () => switchEdition("Turku"));
archipelagoOption.addEventListener("click", () => switchEdition("Archipelago"));
homeOption.addEventListener("click", () => switchEdition("Home"));
document.getElementById("activityButton").addEventListener("click", displayNewIdea);

