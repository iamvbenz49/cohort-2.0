// ugly way of writing code

type UserAge = {
    [key: string] : number;
}

// Better way of defining a type using Record
type Users = Record<string, number>;

const users: Users = {
    "kl": 2,
    "rahul": 3
};
