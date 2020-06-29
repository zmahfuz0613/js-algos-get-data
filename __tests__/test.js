let algos = require("../getData.js");




let answer = ['Penne with Mushrooms', 'Eggplant Parm', 'Fried Rice' ]

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

//WORD INCLUDES
//all letters of first word are in second
test("return the recipes that contain the given string", () => {
  // expect(algos.getData(["hello", "hellohello"])).toBeTruthy();
  expect(algos.getData(recipesData, 'oil')).toStrictEqual(answer);

});

  