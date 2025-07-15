let arr = [
    {
        id: 1,
        name: "Parth Sapariya",
        age: 20,
        course: "BCA",
        email: "parth001@example.com",
    },
    {
        id: 2,
        name: "Krishna Patel",
        age: 19,
        course: "BCA",
        email: "krishna002@example.com",
    },
    {
        id: 3,
        name: "Aarav Mehta",
        age: 21,
        course: "BBA",
        email: "aarav003@example.com",
    },
    {
        id: "4",
        name: "Diya Shah",
        age: 20,
        course: "BCA",
        email: "diya004@example.com",
    },
    {
        id: 5,
        name: "Rohan Desai",
        age: 22,
        course: "BSc IT",
        email: "rohan005@example.com",
    },
    {
        id: 6,
        name: "Ishita Joshi",
        age: 19,
        course: "BCom",
        email: "ishita006@example.com",
    },
    {
        id: 7,
        name: "Yash Thakkar",
        age: 20,
        course: "BCA",
        email: "yash007@example.com",
    },
    {
        id: 8,
        name: "Sneha Rana",
        age: 21,
        course: "BBA",
        email: "sneha008@example.com",
    },
    {
        id: 9,
        name: "Devansh Vyas",
        age: 20,
        course: "BSc CS",
        email: "devansh009@example.com",
    },
    {
        id: 10,
        name: "Mitali Pandya",
        age: 22,
        course: "BCA",
        email: "mitali010@example.com",
    },
];
console.log("--------------------------")
console.log(arr.map((e) => e.age * e.age))
console.log("--------------------------")
console.log(arr.filter((e) => e.name == "Mitali Pandya"))
console.log("--------------------------")
arr.forEach((e) => {
    console.log(e)
})
console.log("--------------------------")
let box1 = [10, 20, 30, 40, 50]
console.log(box1.indexOf(20))
console.log("--------------------------")
console.log(box1.findIndex((e) => e == 40))
console.log("--------------------------")
console.log(box1.includes(10))
console.log("--------------------------")
console.log(box1.every((e) => e == 10))
console.log("--------------------------")
console.log(box1.some((e) => e == 10))
console.log("--------------------------")

box1.forEach((e)=> {
    console.log(e)
})

box1.push(60)
console.log("--------------------------")

box1.forEach((e)=> {
    console.log(e)
})

box1.pop()
console.log("--------------------------")

box1.forEach((e)=> {
    console.log(e)
})

box1.unshift(5)
console.log("--------------------------")

box1.forEach((e)=> {
    console.log(e)
})

box1.shift()
console.log("--------------------------")

box1.forEach((e)=> {
    console.log(e)
})