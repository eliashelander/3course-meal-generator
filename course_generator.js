// Create 3 lists of dishes.
// Starters:
let starters = [
    'Kakori Kebabs',
    'Stir Fried Chilli Chicken',
    'Microwave Paneer Tikkas',
    'Aloo and Dal ki Tikki',
    'Cheese Balls',
    'Chicken Satay',
    'Bhuna Masala Chicken Wings',
    'Tangri Kebabs',
    'Hot Basil Chicken Cups',
    'Crumb-Fried Chicken'
]

// Mains:
let mains = [
    'Creamy Tomato Pasta',
    'Baked Honey Mustard Chicken',
    'Red and White Tortellini',
    'Classic Meatloaf',
    'Pot Roast',
    'Crockpot Chicken and Dumplings',
    'Honey Orange Fish Fillets',
    'Meatball Stew Casserole',
    'Vegan Skewers',
    'Vietnamise Porkchops'
]

// Desserts:
let desserts = [
    'No Bake Kool-Aid Pie',
    'Peanut Butter Stuffed Brownies',
    'Monster Cookie No Bake Bars',
    'Perfect Chocolate Chip Cookies',
    'Peanut Butter Cup Dump Cake',
    'Strawberry Cheesecake Lasagna',
    'No Bake Mint Chocolate Chip Pie',
    'Easy No Bake Avalanche Cookies',
    'Gooey Brownie Pie',
    'Reeses Fudge '
]

// Function to generate starter
const generateStarter = listStarters => {
    const randomNumber = Math.floor(Math.random() * listStarters.length);
    return listStarters[randomNumber];
}

// Function to generate main
const generateMain = listMains => {
    const randomNumber = Math.floor(Math.random() * listMains.length);
    return listMains[randomNumber];
}

// Function to generate dessert

// Function to return complete 3 course meal