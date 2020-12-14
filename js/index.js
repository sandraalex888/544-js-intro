//alert('Hello JavaScript!');

//let, const, var(не пишемо вар)

let message = 'Hello World!';
//alert(message);

message = 'Nice to see you'
//alert(message);

let num = 42;
num = num + 1;
//alert(num);

const age = Number(prompt('Enter your age'));
const nextAge = add(age, 1); //-, /, *, %, **
alert(nextAge);

if (age < 19) { // > <= >= === !== == != && ||
    alert('You are underaged');
} else if (age < 60) {
    alert('You are adult');
} else  {
    alert('You are old');
}

//const textMessage = age < 19 ? 'You are underaged' : 'You are adult';
//alert(textMessage);

function add(a, b) {
    const result = a + b;
    return result;
}
function multiply(a, b) {
    return a*b;

}







