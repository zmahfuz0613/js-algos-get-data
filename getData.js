// - Given an array of objects and a string. If a recipe's ingredients include the string return the name(s) of the recipe(s). 
// - The output should return an array of the recipe(s) names.

const recipesData =
{
    data: {
        recipes: [
            {
                style: 'Italian',
                name: 'Penne with Mushrooms',
                ingredients: [
                    "whole wheat penne",
                    "mushroom",
                    "butter",
                    "olive oil",
                    "tomato sauce"
                ]
            },
            {
                style: 'Italian',
                name: 'Eggplant Parm',
                ingredients: [
                    "eggplant",
                    "sub",
                    "butter",
                    "olive oil",
                    "tomato sauce",
                    "cheese",
                    "oregano"
                ]
            },
            {
                style: 'Chinese',
                name: 'Fried Rice',
                ingredients: [
                    "brown Rice",
                    "Sesame Oil",
                    "Peanut Oil",
                    "garlic and ginger",
                    "snow peas",
                    "carrot",
                    "tofu",
                    "pepper",
                    "sauce"
                ]
            },
            {
                style: 'Chinese',
                name: 'Dumpling',
                ingredients: [
                    "flour",
                    "vegetables",
                    "soy sauce",
                ]
            }
        ]
    }
}



const getData = (data, str) => {

}

console.log(getData(recipesData, 'oil'))

module.exports = {
    getData
}
