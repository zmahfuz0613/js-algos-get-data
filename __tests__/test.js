let algos = require("../getData.js");
let response = require('../recipesData.js')
let data1 = response.recipesData1
let expected1 = response.expected1
let data2 = response.recipesData1
let expected2 = response.expected1

//GET DATA

test("return the recipe names that contain the given string in their ingredients", () => {
  expect(algos.getData(data1, 'oil')).toStrictEqual(expected1);
  expect(algos.getData(data2, 'oil')).toStrictEqual(expected2);


});

  