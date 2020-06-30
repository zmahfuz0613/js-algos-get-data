const recipesData1 = 
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
let expected1 = ['Penne with Mushrooms', 'Eggplant Parm', 'Fried Rice' ]


const recipesData2 = 
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
                style: 'Chinese',
                name: 'Fried Rice',
                ingredients: [
                    "brown Rice",
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
let expected2 = ['Penne with Mushrooms', 'Fried Rice' ]



module.exports = {
    recipesData1,
    expected1,
    recipesData2,
    expected2
}




