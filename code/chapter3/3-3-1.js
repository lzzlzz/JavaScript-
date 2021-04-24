//var 声明作用域

function test() {
    var message = 'hi'
}

test();
// var 声明的函数是函数作用域，出了函数就是未定义
//console.log(message) //ReferenceError: message is not defined

//注意与块作用域的区别 这个是块作用域，所以这里的message就相当于全局函数的一个变量，所以就能打印出来了
if(true) {
    var message ='hi'
}

console.log(message) //hi

//var 声明提升 hoist   var声明变量支持返回多次声明，不报错
//首先明确一点，代码自上向下一行一行执行，当执行到age的时候，从代码上看还没有age，但是由于var声明的变量在建立上下文阶段已经是age = undefined状态，所以才不报错
function foo() {
    console.log(age) //undefined
    var age = 6
}
foo()

//以上代码等价于
function foo() {
    var age;
    console.log(age) 
    age = 6
}
foo()

