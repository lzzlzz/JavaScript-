//const 在for-in for-of 循环中的应用 每次都会创建一个新的变量

for(const key in {a:1, b:2, c:3}) {
    console.log(key)
}

for(const val of [1,2,3]) {
    console.log(val)
}