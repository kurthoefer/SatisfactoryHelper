// import data from './data/data.json'
const data = require('./data/data.json')

// const parsed = JSON.parse(data)
// const recipes = parsed.recipes

// console.log()

const recipes = data.recipes

const outputProducts = [];

function filter(recipes) {
  console.log('start')

  for (var recipe in recipes) {
    // console.log(recipes[recipe])
    if ( !recipes[recipe].forBuilding && !recipes[recipe].inWorkshop) {
      for (var product of recipes[recipe].products) {
        // console.log(product)
        if (!outputProducts.includes(product.item)) {
          outputProducts.push(product.item)
        }
      }
    }
  }
  return outputProducts
}

console.log(filter(recipes))

// console.log(data)