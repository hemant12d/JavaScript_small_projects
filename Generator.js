// In this tutorial we will learn about Generator
function* numbersGen(){
    let i = 0;

    // while(true){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    // }
}
const genNumber = numbersGen();
console.log(genNumber.next().done);
console.log(genNumber.next().done);
console.log(genNumber.next().done);
console.log(genNumber.next().done);
console.log(genNumber.next().done);
console.log(genNumber.next().done);
console.log(genNumber.next().done);