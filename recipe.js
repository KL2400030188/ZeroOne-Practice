const recipes = [
    {
        "id": 1,
        "image": "./images/pasta.jpeg",
        "title": "Pasta",
        "description": "This delicious pasta recipe is perfect for a quick and easy meal. Try it out today!",
        "ingredients": [
            "200g pasta",
            "2 cups water",
            "1 cup tomato sauce",
            "1/2 cup grated cheese",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        "instructions": [
            "Boil pasta in water until al dente.",
            "Heat olive oil in a pan and add tomato sauce.",
            "Mix cooked pasta with the sauce.",
            "Top with grated cheese and serve hot."
        ]
    },
    {
        "id": 2,
        "image": "./images/muttonbiryani.jpeg",
        "title": "Mutton Biryani",
        "description": "A rich and aromatic rice dish made with tender mutton, basmati rice, and a blend of spices.",
        "ingredients": [
            "500g mutton",
            "2 cups basmati rice",
            "1 cup yogurt",
            "2 onions, sliced",
            "2 tablespoons biryani masala",
            "1/2 cup fried onions"
        ],
        "instructions": [
            "Marinate mutton with yogurt and spices for 2 hours.",
            "Cook basmati rice until 70% done.",
            "Layer rice and marinated mutton in a pot.",
            "Cook on low heat for 40 minutes.",
            "Garnish with fried onions and serve hot."
        ]
    },
    {
        "id": 3,
        "image": "./images/appricot.jpeg",
        "title": "Apricot Delight",
        "description": "A delightful dessert made with dried apricots and cream.",
        "ingredients": [
            "200g dried apricots",
            "1 cup sugar",
            "2 cups water",
            "1 cup whipped cream",
            "Chopped nuts for garnish"
        ],
        "instructions": [
            "Soak dried apricots in water for 2 hours.",
            "Cook apricots with sugar until soft.",
            "Blend into a smooth paste.",
            "Layer with whipped cream and garnish with nuts."
        ]
    },
    {
        "id": 4,
        "image": "./images/pancakes.jpg",
        "title": "Pancakes",
        "description": "Fluffy and delicious pancakes that are perfect for breakfast or brunch.",
        "ingredients": [
            "1 cup all-purpose flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 egg",
            "2 tablespoons melted butter"
        ],
        "instructions": [
            "Mix dry ingredients in a bowl.",
            "Whisk wet ingredients in another bowl.",
            "Combine wet and dry ingredients until smooth.",
            "Cook on a greased skillet until golden brown on both sides."
        ]
    },
    {
        "id": 5,
        "image": "./images/appolofish.jpeg",
        "title": "Apollo Fish",
        "description": "A spicy and tangy fish fry that is sure to tantalize your taste buds.",
        "ingredients": [
            "500g fish fillets",
            "2 tablespoons cornflour",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon red chili powder",
            "1 teaspoon turmeric powder",
            "Salt to taste",
            "Oil for frying"
        ],
        "instructions": [
            "Marinate fish with spices and cornflour for 30 minutes.",
            "Heat oil in a pan and fry the fish until golden brown.",
            "Serve hot with lemon wedges."
        ]
    },
    {
        "id": 6,
        "image": "./images/fries.jpeg",
        "title": "French Fries",
        "description": "Crispy and delicious french fries that are perfect for snacking.",
        "ingredients": [
            "4 large potatoes",
            "Oil for frying",
            "Salt to taste"
        ],
        "instructions": [
            "Peel and cut potatoes into thin strips.",
            "Soak in cold water for 30 minutes.",
            "Heat oil in a pan and fry potatoes until golden and crispy.",
            "Sprinkle with salt and serve hot."
        ]
    },
    {
        "id": 7,
        "image": "./images/pizza.jpg",
        "title": "Pizza",
        "description": "A classic pizza recipe that is sure to be a hit with the whole family.",
        "ingredients": [
            "1 pizza base",
            "1/2 cup pizza sauce",
            "1 cup shredded mozzarella cheese",
            "Toppings of your choice (pepperoni, vegetables, etc.)"
        ],
        "instructions": [
            "Spread pizza sauce on the base.",
            "Add toppings and sprinkle cheese on top.",
            "Bake in a preheated oven at 200°C for 15 minutes.",
            "Serve hot."
        ]
    },
    {
        "id": 8,
        "image": "./images/tandoori.jpeg",
        "title": "Tandoori Chicken",
        "description": "A flavorful and aromatic chicken dish that is perfect for any occasion.",
        "ingredients": [
            "500g chicken",
            "1 cup yogurt",
            "2 tablespoons tandoori masala",
            "1 tablespoon lemon juice",
            "Salt to taste"
        ],
        "instructions": [
            "Marinate chicken with yogurt, tandoori masala, and lemon juice for 4 hours.",
            "Grill or bake the chicken until cooked through.",
            "Serve with mint chutney."
        ]
    },
    {
        "id": 9,
        "image": "./images/paneerbuttermasala.jpeg",
        "title": "Paneer Butter Masala",
        "description": "A rich and creamy paneer dish that is sure to be a hit with vegetarians and non-vegetarians alike.",
        "ingredients": [
            "200g paneer",
            "2 tablespoons butter",
            "1 cup tomato puree",
            "1/2 cup cream",
            "1 teaspoon garam masala",
            "Salt to taste"
        ],
        "instructions": [
            "Heat butter in a pan and add tomato puree.",
            "Cook until the oil separates.",
            "Add cream, garam masala, and paneer cubes.",
            "Simmer for 5 minutes and serve hot."
        ]
    },
    {
        "id": 10,
        "image": "./images/biryanii.webp",
        "title": "Chicken Biryani",
        "description": "A classic Indian rice dish made with tender chicken, basmati rice, and a blend of spices.",
        "ingredients": [
            "500g chicken",
            "2 cups basmati rice",
            "1 cup yogurt",
            "2 onions, sliced",
            "2 tablespoons biryani masala",
            "1/2 cup fried onions"
        ],
        "instructions": [
            "Marinate chicken with yogurt and spices for 2 hours.",
            "Cook basmati rice until 70% done.",
            "Layer rice and marinated chicken in a pot.",
            "Cook on low heat for 30 minutes.",
            "Garnish with fried onions and serve hot."
        ]
    }
];

// Function to display recipes on index.html
function displayRecipes() {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = "";

    recipes.forEach(recipe => {
        let recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");
        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
        `;
        recipeItem.onclick = () => saveRecipe(recipe.id);
        recipeContainer.appendChild(recipeItem);
    });
}

// Function to save selected recipe and navigate to recipe.html
function saveRecipe(recipeId) {
    const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);
    localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));
    window.location.href = "recipe.html";
}

// Function to load recipe details on recipe.html
function loadRecipe() {
    const recipeData = localStorage.getItem("selectedRecipe");
    if (recipeData) {
        const recipe = JSON.parse(recipeData);
        document.getElementById("recipe-title").textContent = recipe.title;
        document.getElementById("recipe-image").src = recipe.image;
        document.getElementById("recipe-image").alt = recipe.title;
        document.getElementById("recipe-description").textContent = recipe.description;

        // Display ingredients
        const ingredientsList = document.getElementById("recipe-ingredients");
        ingredientsList.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");

        // Display instructions
        const instructionsList = document.getElementById("recipe-instructions");
        instructionsList.innerHTML = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("");
    } else {
        document.body.innerHTML = "<h2>No Recipe Found</h2>";
    }
}

// Run appropriate function based on the page
if (window.location.pathname.includes("mainpage.html") || window.location.pathname === "/") {
    displayRecipes();
} else if (window.location.pathname.includes("recipe.html")) {
    window.onload = loadRecipe;
}

