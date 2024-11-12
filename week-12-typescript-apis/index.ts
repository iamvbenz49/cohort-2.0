interface User {
    id:number,
    name: string,
    age: number,
    email?:string,
    password:string
}

type updatedUser = Pick<User, 'name' | 'age' >

function sumOfAge(u1: updatedUser, u2: updatedUser) {
    return u1.age + u2.age;
}



const age = sumOfAge({
    name: 'Taro', age: 12,
}, {
    name: 'Bruce Wayne', 
    age: 11,
})

type updateOptional = Partial<User>
console.log(age)