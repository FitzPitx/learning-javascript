// Function Challenges
// First Challenge.

function getCelsius(temperatureF){
    celsius = ((temperatureF - 32) * 5/9);
    return `The temperature is ${celsius} \xB0C`;
}

// 2. solution
// const getCelsiusArrow = temperatureF => {
//     celsius = ((temperatureF - 32) * 5/9);
//    console.log(`The temperature is ${celsius} \xB0C`);   
// }

// 3. solution more concise and shorter
const getCelsiusArrow = (f) => (f - 32) * 5/9;

console.log(getCelsius(32));
console.log(getCelsiusArrow(32));

// Second Challenge
const minMax = (num) => ({
    min: Math.min(...num),
    max: Math.max(...num)
});

console.log(minMax([1,2,3,4,5,8,9]));

// Third Challenge
(function rectangleArea(lenght, width) {
    console.log(lenght * width);
})(3, 5);

((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
    console.log(output);
})(10, 5);