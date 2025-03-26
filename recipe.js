const recipes = [
    {
        "id": 1,
        "image": "./images/pasta.jpeg",
        "title": "Pasta",
        "description": "This delicious pasta recipe is perfect for a quick and easy meal. Try it out today!"
    },
    {
        "id": 2,
        "image": "./images/muttonbiryani.jpeg",
        "title": "Mutton Biryani",
        "description": "A rich and aromatic rice dish made with tender mutton, basmati rice, and a blend of spices."
    },
    {
        "id": 3,
        "image": "./images/appricot.jpeg",
        "title": "Apricot Delight",
        "description": "A delightful dessert made with dried apricots and cream."
    },
    {
        "id": 4,
        "image": "./images/pancakes.jpg",
        "title": "Pancakes",
        "description": "Fluffy and delicious pancakes that are perfect for breakfast or brunch."
    },
    {
        "id": 5,
        "image": "./images/appolofish.jpeg",
        "title": "Apollo Fish",
        "description": "A spicy and tangy fish fry that is sure to tantalize your taste buds."
    },
    {
        "id": 6,
        "image": "./images/fries.jpeg",
        "title": "French Fries",
        "description": "Crispy and delicious french fries that are perfect for snacking."
    },
    {
        "id": 7,
        "image": "./images/pizza.jpg",
        "title": "Pizza",
        "description": "A classic pizza recipe that is sure to be a hit with the whole family."
    },
    {
        "id": 8,
        "image": "./images/tandoori.jpeg",
        "title": "Tandoori Chicken",
        "description": "A flavorful and aromatic chicken dish that is perfect for any occasion."
    },
    {
        "id": 9,
        "image": "./images/paneerbuttermasala.jpeg",
        "title": "Paneer Butter Masala",
        "description": "A rich and creamy paneer dish that is sure to be a hit with vegetarians and non-vegetarians alike."
       
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
    } else {
        document.body.innerHTML = "<h2>No Recipe Found</h2>";
    }
}

// Run appropriate function based on the page
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    displayRecipes();
} else if (window.location.pathname.includes("recipe.html")) {
    window.onload = loadRecipe;
}
