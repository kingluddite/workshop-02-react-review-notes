// const personArr = ['Cooper', 12]

// one way
// const nameOne = personArr[0]
// const ageOne = personArr[1]

// array destructuring
// const [nameTwo, ageTwo] = personArr
// console.log(nameTwo)
// object destructuring
// const personObj = {
//   name: 'Cooper'
//   age: 12
// }

const personObj2 = {
  nameTwo: 'Cooper',
  age: 12,
}
// long way
// const nameLong = personObj.nameTwo
// const ageLong = personObj.ageTwo

// const { nameTwo, ageTwo} = person;

// use custom name for object destructuring
const { nameTwo: studentName, age } = personObj2
console.log(studentName)
