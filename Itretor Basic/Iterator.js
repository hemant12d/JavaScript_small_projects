console.log('Welcome to the world of Iterator');

function fruitIterator(valuesofArray){
    let nextIndexOf = 0; 

    // Returning an object using Iterator
    return {
        next: function(){
            if (nextIndexOf < valuesofArray.length){
                return {value: valuesofArray[nextIndexOf++], done:false}
            }
            else
            {
                return {done:true}
            }
        }
    }
}



const arrayofFruits = ["Mango", "Apple", "Orange", "Banana", "Grapes"];
let fruit = fruitIterator(arrayofFruits);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
// console.log(fruit.next().done);