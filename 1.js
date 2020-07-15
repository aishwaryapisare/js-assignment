console.log("Hey this is console.log function")
console.warn("This is warn function")
console.error("This is error")
var abc = [["Aishwarya","Pisare"],["Samarth","Shelke"],["Shruti","Kharat"]]
console.table(abc)
var obj1 = { firstname : "Aishwarya" , lastname : "Pisare" }
console.info(obj1)

console.log("Var examples")
var a = "Aishwarya"
console.log(a, "=" , typeof(a))

var b = 21
console.log("b = ", b , typeof(b))

console.log("let Examples")
{
    b = 31
    console.log("b = ", b, "local scope i.e. let ")
}

console.log("const Examples")
const c = 80
console.log(c)
c = 10
