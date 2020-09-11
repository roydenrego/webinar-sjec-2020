var a = 1; // integer
var b = 3.14; // float/double
var c = true; // boolean
var greeting = "Hello World!"; // string

var arr = [1, 3, "Peter"]; // array
arr[1] // access array element

function greet(fname, lname) {
    alert('Hi ' + fname + ' ' + lname);
}

var obj = {
    d: 4,
    e: 12,
    f: 'Parker',
    greet: function (fname, lname) {
        alert('Hi ' + fname + ' ' + lname);
    }
}

obj.d;
obj.greet();

const greet = <h1>Hello, {fname} {lname}</h1>;
<CustomComponent>Hello</CustomComponent>