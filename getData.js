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

    results = []
    indeces = []
    data.data.recipes.forEach((recipe, index) => {
        return recipe.ingredients.forEach(ing => {
            // console.log(ing)
            if (ing.toLowerCase().includes(str.toLowerCase())) {
                // console.log(ing)             
                   if(!indeces.includes(index)){
                    //    console.log('indeces', indeces)
                       indeces.push(index)
                       results.push(recipe.name)
                   }

            }
        })
    })
    return results
}

console.log(getData(recipesData, 'oil'))

module.exports = {
    getData
}
