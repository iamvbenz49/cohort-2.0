"use strict";
function sumOfAge(u1, u2) {
    return u1.age + u2.age;
}
const age = sumOfAge({
    name: 'Taro', age: 12,
}, {
    name: 'Bruce Wayne',
    age: 11,
});
console.log(age);
