const trainee = {
    name: "jawad",
    age: 18,
    email: "qwerty@124gmail.com"
}
trainee.age=40;
console.log(trainee);

// const train = 513;
// console.log(train)

// const exp = !$_
// const num1 = $jawad;
// console.log(num1) 
// const num2 = !jd;
// console.log(num2)
// const num3 = @jd;
// console.log(num3)
// const num4 = #jd;
// console.log(num4)
// const num5 = $jd;
// console.log(num5)
// const num6 = %jd;
// console.log(num6)
// const num7 = ^jd;
// console.log(num7)

const x = [1, 2, 3]
console.log(x);
x.push(4);
console.log(x);
// x = 55;
// console.log(x)


let obj = {
    name: "jawad",
    value: "1st",
}
let newObj = obj.map((x)=>{
    return x + "checking array methods"
})
console.log(newObj);

let objMap = {
    key: "cahbi",
    value: "value",
    name: "Malik"
}
let mapObj = objMap.filter(m => {
    return m + "checking with filter method"
})