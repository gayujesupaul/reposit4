// script.js
const restaurantList = document.getElementById("restaurantList");

// Example restaurant data
const restaurants = [
    {
        name: "Restaurant 1",
        image: "restaurant1.jpg",
        description: "Delicious dishes from Restaurant 1.",
    },
    // Add more restaurants here
];

// Display restaurants on the page
function displayRestaurants() {
    restaurantList.innerHTML = "";
    restaurants.forEach((restaurant) => {
        const restaurantDiv = document.createElement("div");
        restaurantDiv.className = "restaurant";
        restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p>${restaurant.description}</p>
            <button class="order-button" onclick="order('${restaurant.name}')">Order Now</button>
        `;
        restaurantList.appendChild(restaurantDiv);
    });
}

// Example order function
function order(restaurantName) {
    alert(`Ordered from ${restaurantName}`);
}

// Display restaurants when the page loads
window.onload = displayRestaurants;
