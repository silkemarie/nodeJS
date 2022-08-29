//type coersion lecture
const total = 34.32;
const price = 12.32;

const newTotal = total + price;
console.log(newTotal);

//tjekker her om total er det samme som newtotal.
//her bruger vi 3 lighedstegn, hvis det er samme type
const balanceEquals = total === newTotal;
console.log(balanceEquals);

const cat = {
    key: "value",
    name: "Tom"
};

//square-bracket notation
console.log(cat["name"]);
//et andet navn notation. at foretrække:
console.log(cat.name);