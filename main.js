const hamburger = {
  name: "Hamburger",
  type: "beef",
  cooked: false
};
const zucchini = {
  name: "Zucchini",
  type: "vegetable",
  cooked: false
};
const chickenBreast = {
  name: "Chicken Breast",
  type: "chicken",
  cooked: false
};
const corn = {
  name: "Corn",
  type: "vegetable",
  cooked: false
};
const steak = {
  name: "Steak",
  type: "beef",
  cooked: false
};
// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the
// items after they are cooked.
// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
function grill(currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;
  
  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
}
        for (i = 0; i < foods.length; i++) {
          grill(foods[i]);
          console.log(foods[i])
          
        }