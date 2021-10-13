// Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log('Zero', Boolean(0));
console.log('Undefined', Boolean(undefined));
console.log('Jonas', Boolean('Jonas'));
console.log('Empty Object', Boolean({}));
console.log('Null', Boolean(null));
console.log('NaN', Boolean(NaN));
console.log('Empty String', Boolean(""));

const money = 0;

if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}


let height = 0;

if(height || height === 0) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
