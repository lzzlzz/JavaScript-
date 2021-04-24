//let  声明 块作用域 就是一个块就把let声明的变量限制住了

if(true) {
    var message = 'hi'
}
console.log(message) //hi

if(true) {
    let message2 = 'hi'
}
//console.log(message2)//ReferenceError: message2 is not defined

//关于这个重复性声明问题  最初var是允许重复声明的，但是let不允许，所以有以下现象

// var message //undefined
// var message //undefined

// let age //undefined
// let age // SyntaxError: Identifier 'age' has already been declared

// var first
// let first //SyntaxError: Identifier 'first' has already been declared

// let second 
// var second //SyntaxError: Identifier 'second' has already been declared

//暂时性死区 对比

const l = console.log
// l(name) //undefined
// var name = 'li'

// l(age) // ReferenceError: Cannot access 'age' before initialization
// let age = 9 

//关于全局变量 以下代码为浏览器运行结果  与node不同的是 var 同样不会在global中声明一个变量，但是在浏览器环境下会

// var name = 'li'

// l(window.name) //li

// let age = 7
// l(window.age) //undefined

//4.for循环中的let声明

for(var i = 0; i <5;i++) {
    console.log(i) // 0 1 2 3 4 
}

for(var i = 0; i <5; i++) {
    //回调函数这里面接收的应该是触发回调函数是传的参数，如果没有就是undefined,所以如果写i就打印出5个undefined，没写就按作用域往上找
    setTimeout(()=>console.log(i),0) // 5 5 5 5 5 
}

//区别很明显，js引擎会为for循环中的let声明一个新的迭代变量
for(let i=0; i<5;i++) {
    setTimeout(()=>console.log(i),0) // 0 1 2 3 4
}
