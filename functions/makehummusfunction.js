
let hummus = function(factor){
    let ingredientes = function (amount, unit, nombre){

        let ingredientesAmount = amount * factor;

        if(ingredientesAmount > 1){
            unit += "s";

    }
        console.log(`${ingredientesAmount} ${unit} ${nombre}`);
        };
        
        ingredientes(1, "can", "chickpeas");
        ingredientes(0.25, "cup", "tahini");
        ingredientes(0.25, "cup", "lemon juice");
        ingredientes(1, "clove", "garlic");
        ingredientes(2, "tablespoon", "olive oil");
        ingredientes(0.5, "teaspoon", "cumin");
};
 