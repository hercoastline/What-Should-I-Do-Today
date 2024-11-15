// Activities for Turku and Archipelago
const turkuActivities = [
    "Visit Ikea and Muovitukku.",
    "Take a walk around the city and admire Turku's beautiful churches.",
    "Visit a public sauna like Järvelän Avanto and enjoy a refreshing dip in the sea.",
    "Challenge your friends to a game of bowling at a local alley.",
    "Play a round of billiards and enjoy a casual night out.",
    "Try your hand at shuffleboard at Galaxie Center.",
    "Hike to the top of Hirvensalo for a rewarding view of the city.",
    "Visit a café and order something you’ve never tried before.",
    "Take a day trip to Naantali and visit the old town.",
    "Take a day trip to Naantali and walk the Path of Love.",
    "Stroll around Moomin World in Naantali, even during its quiet winter season.",
    "Explore one of Turku’s many museums and soak in some culture.",
    "Go thrift shopping at SPR-kontti and hunt for hidden treasures.",
    "Have a spa day at home with facemasks, candles, and relaxing music.",
    "Visit Ruissalo and enjoy the trails or botanical garden.",
    "Head to Happy Badger and discover a new board game to play.",
    "Pack something warm and enjoy a meal outdoors in nature.",
    "Try indoor bouldering at Bouldertehdas for an active adventure.",
    "Play a game of padel at a local court.",
    "Book a session for squash or badminton for a fun workout.",
    "Bounce around at the trampoline park for a playful day.",
    "Have a drink at Bar Rica.",
    "Have a drink at Arvo.",
    "Try a unique craft beer at 5piste5.",
    "Head to Hugo for a beer and some classic board games.",
    "Explore the pubs of Turku with a random pub crawl.",
    "Walk through Katariinanlaakso and admire the surroundings.",
    "Take a drive while listening to a podcast.",
    "Go for a drive and get a milkshake from Burger King.",
     "Wander through Luolavuori and take in the natural scenery.",
    "Visit the ruins of Piispanlinna.",
    "Enjoy the day/evening at Kakola Spa.",
    "Treat yourself to dinner at a new restaurant you haven’t tried yet.",
    "Walk around Littoistenjärvi lake.",
    "Visit the Turku Market Hall and try something you’ve never eaten before.",
    "Explore the historic Turku Cathedral and its stunning architecture.",
    "Walk along the Aura River.",
    "Take a peaceful stroll along Nummenranta and Koroistenniemi.",
    "Discover Virnamäenpuisto for a hidden gem walk.",
    "Visit Aboa Vetus & Ars Nova.",
    "Take a spontaneous day trip to a nearby town for a change of scenery.",
    "Take a spontaneous trip to Helsinki.",
    "Go ice skating if there's an available rink.",
    "Listen to a podcast while going for a walk.",
    "Research Turku’s history and find local landmarks to explore.",
    "Visit a nearby town for lunch or dinner and explore its charm.",
    "Go geocaching around Turku and discover hidden treasures.",
    "Check out todays events and attend something random.",
    "Take a trip to Pargas and pick up artisan cheese from Jordkällaren.",
    "Visit a flower shop and pick a plant to take home.",
    "Find an ice cream place and try a new flavor combination.",
    "Visit an antique shop and explore unique items.",
    "Take a drive without a destination and see where you end up.",
    "Go for a walk around Portsa, stop at Kaos Thrift and ARVO.",
    "Walk around Turku Cemetery and appreciate its quiet beauty.",
    "Take a selfie with Turku’s iconic Posankka statue.",
    "Warm up with a warm drink at Café Brahe.",
    "Visit the Pharmacy Museum and Qwensel House for a step back in time.",
    "Watch a movie at Kino Diana or Finnkino.",
    "Explore the maritime exhibits at Forum Marinum.",
    "Have a relaxed coffee at Café Fazer in the city center.",
    "Go for a beer at Cosmic Comic Café.",
    "Have a movie night at home with snacks from Turku’s gourmet shops.",
    "Enjoy a drink at Restaurant Nerå.",
    "Go out to eat dessert, and dessert only.",
    "Try out Hohto Mini-Golf for a glow-in-the-dark putting adventure."
];

const archipelagoActivities = [
    "Take a walk up Hundbanan/Koirabaana and enjoy the views.",
    "Explore the surreal world of Salvador Dalí at Art Bank.",
    "Warm up with a hot chocolate at Vepo Laavu.",
    "Bring a thermos and drink something warm in the forest.",
    "Go for a walk to Munkviken Nature Path.",
    "Eat cake at café Hallonblad.",
    "Try a delicious pie at Café Nathalie.",
    "Enjoy a drink at Hunger & Törst.",
    "Challenge your friends to a game of billiards at Harry's or Pireus.",
    "Go for an adventurous evening walk in a forest with a flashlight.",
    "Visit Jordkällaren and treat yourself to some artisanal cheese.",
    "Discover hidden treasures while geocaching around Pargas.",
    "Listen to a podcast while enjoying a peaceful walk.",
    "Take a nature walk and collect leaves or stones for crafting.",
    "Visit the ruins of Piispanlinna and imagine life in medieval times.",
    "Pack something warm to eat and enjoy an outdoor meal in nature.",
    "Take a drive around the archipelago while listening to a podcast.",
    "Take a winter hike on Nauvo’s marked trails.",
    "Take a stroll around the harbor in Nauvo and enjoy the quiet atmosphere.",
    "If there's snow, grab a sled and find a hill near Pargas or Nauvo for some fun.",
    "Visit Lenholmen Nature Reserve and grill lunch/dinner at its picnic areas.",
    "Visit the Pargas Lime Stone Quarry and take in the massive scale of Finland's largest open-pit mine.",
    "Take a walk through Gamla Malmen and admire the old wooden houses.",
    "Go birdwatching at Lenholm Conservation Area and try to spot eagles or swans.",
    "Visit the Pargas Church and explore its historic interior.",
    "Wander through the Pargas Cemetery, known for its peaceful atmosphere.",
    "Build a snowman at a park or open space in Pargas if there’s enough snow.",
    "Take a quiet walk along Sundet.",
    "Bring a thermos of hot chocolate to Hundbanan and enjoy it while watching the quarry from above.",
    "Walk through the town center and enjoy the seasonal decorations or lights.",
    "Walk around Pargas Water Tower.",
    "Take a walk around the Bläsnäs Beach area and enjoy the quiet shoreline.",
    "Watch the sunset at Mustfinn beach.",
    "Find an unusual or quirky souvenir at a local Pargas shop.",
    "Enjoy a coffee and watch the world go by from the windows of Café Axo."
];

const homeActivities = [
    "Host a mini cook-off with friends.",
    "Do a puzzle.",
    "Paint candles.",
    "Write a thank-you letter to someone you appreciate.",
    "Have a cozy movie night with blankets and popcorn.",
    "Cook dinner at home using seasonal ingredients.",
    "Try making your own glögi (mulled wine).",
    "Make your own sushi.",
    "Throw a mexican evening, tortillas from scratch and mexican beer for everyone!",
    "Play UNO.",
    "Build a puzzle together.",
    "Bake cookies.",
    "Have a beer tasting at home.",
    "Make homemade hot chocolate with unique flavors.",
    "Make your own hot sauce or jam.",
    "Have a cheese tasting night with different types of cheese.",
    "Have a spa day at home – facemasks, candles, and relaxing music.",
    "Try a new tea blend at home.",
    "Make pizza from scratch.",
    "Make something out of clay.",
    "Paint candles.",
    "Bake cinnamon buns.",
    "Have a movie marathon with Nordic winter films.",
    "Have a winter self-care day with face masks and a long bath.",
    "Make homemade candles.",
    "Experiment with making your own bread, like sourdough or rye.",
    "Try a virtual museum or gallery tour.",
    "Have a game night with classic games like Monopoly or Clue.",
    "Write a letter to someone you appreciate.",
    "Make your own flavored popcorn for a movie night.",
    "Try brewing your own kombucha or fermenting vegetables.",
    "Bake a pie with seasonal fruits like apples or pears.",
    "Make chocolate balls.",
    "Create your own hot drink recipe—experiment with spices, syrups, and toppings.",
    "Learn how to fold fancy napkins for future dinner parties.",
    "Make homemade pasta from scratch.",
    "Make your own milkshake.",
    "Learn origami and make a collection of folded paper creations.",
    "Set up a mini home science experiment (like making slime).",
    "Make your own marshmallows to add to hot chocolate.",
    "Plan your dream vacation and research all the fun things to do there."
];

// Default activities and slider position
let activities = turkuActivities;

// Ensure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    const toggleSlider = document.getElementById("toggle-slider");
    const turkuOption = document.getElementById("turkuOption");
    const archipelagoOption = document.getElementById("archipelagoOption");
    const homeOption = document.getElementById("homeOption");
    const activityIdea = document.getElementById("activityIdea");
    const activityButton = document.getElementById("activityButton");

    // Function to switch editions
    function switchEdition(edition) {
        if (edition === "Turku") {
            toggleSlider.style.left = "0"; // Move slider to Turku
            activities = turkuActivities;
        } else if (edition === "Archipelago") {
            toggleSlider.style.left = "33.33%"; // Move slider to Archipelago
            activities = archipelagoActivities;
        } else if (edition === "Home") {
            toggleSlider.style.left = "66.66%"; // Move slider to Home
            activities = homeActivities;
        }
        // Clear the displayed activity
        activityIdea.textContent = "";
        activityButton.textContent = "Tell me what to do";
    }

    // Show a random activity
    function displayNewIdea() {
        const randomIdea = activities[Math.floor(Math.random() * activities.length)];
        activityIdea.textContent = randomIdea;
        activityButton.textContent = "Give me another idea :)";
    }

    // Add event listeners for edition switches
    turkuOption.addEventListener("click", () => switchEdition("Turku"));
    archipelagoOption.addEventListener("click", () => switchEdition("Archipelago"));
    homeOption.addEventListener("click", () => switchEdition("Home"));
    activityButton.addEventListener("click", displayNewIdea);
});
