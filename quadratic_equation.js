// 5 solve a quadratic equation



// The formula for quadratic equation = ax**2 + bx + c = 0 

let root1, root2;

let a = prompt('Enter first number');
let b = prompt('Enter second number');
let c = prompt('Enter third number');


let discriminant = b * b - 4 * a * c;

if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log('The roots of quadratic equation are '+ root1 + 'and' + root2)
}