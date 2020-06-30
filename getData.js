// - Given an array of objects and a string. If a recipe's ingredients include the string return the name(s) of the recipe(s). 
// - The output should return an array of the recipe(s) names.
let response = require('./recipesData.js')
let data = response.recipesData1

const getData = (data, str) => {
    let results = []
    let indices = []
    data.data.recipes.forEach((recipe, index) => {
        recipe.ingredients.forEach(ing => {

            if (ing.toLowerCase().includes(str.toLowerCase())) {

                if (!indices.includes(index)) {

                    indices.push(index)
                    results.push(recipe.name)
                }

            }
        })
    })
    return results
}

console.log(getData(data, 'oil'))

module.exports = {
    getData
}
