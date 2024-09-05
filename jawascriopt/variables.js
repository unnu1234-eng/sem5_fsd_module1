const sName = "Raj"
console.log(sName)
var age = 15
console.log(typeof(age))
var percent = 25.6
console.log(typeof(percent))
var isPassed = false
console.log(typeof(isPassed))
if( age > 20){
    var isPassed =  true   // var is accessible anywhere in a code. it is global variable.
}
console.log(isPassed)
if(age < 20){
    let percent = 40      //let is not accessible . It is local variable.
    console.log(percent)
}
console.log(percent)