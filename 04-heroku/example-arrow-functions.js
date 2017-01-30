/*var names = ['Andrew', 'Dime', 'Jen'];

names.forEach(function (name) {
    console.log(name);
});

names.forEach((name) => {
    console.log(name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Dima'));*/

var names = ['Andrew', 'Dime', 'Jen'];
//old syntax without bind() we will get error
/*var person = {
    name: 'Dima',
    greet: function () {
        names.forEach(function (name)  {
            console.log(this.name + ' says hi to ' + name);
        }.bind(this))
    }
};*/
//arrow
var person = {
    name: 'Dima',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        })
    }
};

person.greet();

function add(a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
    return a + b;
};
console.log(addStatement(1, 3));

var addExpression = (a, b) => a + b;
console.log(addExpression(4, 3));