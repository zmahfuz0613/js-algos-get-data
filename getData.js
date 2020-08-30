
let response = require('./recipesData.js')
let data = response.recipesData1

const getData = (data, str) => {
    let recipes = data.data.recipes;
    
    let result = recipes.reduce(function(filteredRecipes, recipe){
        let existsIngredient = recipe.ingredients.find(i=>i.toLowerCase().includes(str));
        if(existsIngredient != undefined){
            filteredRecipes.push(recipe.name);
        }
        return filteredRecipes;
        
    }, []);
    return result;
}

console.log(getData(data, 'oil'))

module.exports = {
    getData
}
// wop