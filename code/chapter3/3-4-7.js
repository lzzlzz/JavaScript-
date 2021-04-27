//全局符号注册表 
const {log}  = console
let fooGlobalSymbol = Symbol.for('foo')
let otherFooGlobalSymbol = Symbol.for('foo')

log(fooGlobalSymbol === otherFooGlobalSymbol)

//Symbol.keyFor() 查询全局注册表

log(Symbol.keyFor(fooGlobalSymbol))

let undefinedSymbol = Symbol.for()
log(typeof Symbol.keyFor(undefinedSymbol))

let s = Symbol('foo')
log(typeof Symbol.keyFor(s))  //这个undefined和上边返回的undefined不一样

//使用符号作为属性

let s1 = Symbol('foo'),
    s2 = Symbol('bar')

let o = {
    [s1] : 'foo val',
    [s2] : 'bar val',
    baz : 'baz val',
    qux : 'qux val'
}

log(Object.getOwnPropertySymbols(o))
log(Object.getOwnPropertyNames(o))
log(Object.getOwnPropertyDescriptors(o))
log(Reflect.ownKeys(o))

//Symbol.asyncIterator

//简单示例
// class Foo {
//     async *[Symbol.asyncIterator]() { }
// }
// let f = new Foo();
// log(f[Symbol.asyncIterator]()) //Object [AsyncGenerator] {}

// class Emitter {
//     constructor(max) { 
//         this.max = max;
//         this.asyncId = 0;
//     }

    
//     async *[Symbol.asyncIterator]() { 
//         while(this.asyncId < this.max) {
//             yield new Promise((resolve, reject) =>resolve(this.asyncId++))
//         }
//     }
// }

// async function asyncIterator() {
//     let emitter = new Emitter(5)

//     for await(const x of emitter) {
//         log(x)
//     }
// }

// asyncIterator()

//Symbol.hasInstance 
// class Bar {}
// let b  = new Bar()
// console.log(b instanceof Bar)

// log(Bar[Symbol.hasInstance](b))

// class Baz extends Bar {
//     static [Symbol.hasInstance]() {
//         return false
//     }
// }

// let c = new Baz()
// log(Baz[Symbol.hasInstance](c))
// log(Bar[Symbol.hasInstance](c))

//Symbol.isConcatSpreadable

// let initial = ['foo']

// let array = ['bar']
// log(array[Symbol.isConcatSpreadable])
// log(initial.concat(array))
// // initial[Symbol.isConcatSpreadable] = false
// // array[Symbol.isConcatSpreadable] = false
// log(initial.concat(array))

//类数组对象
// let arrayLikeObject = {length:1, 0:'baz'}
// log(arrayLikeObject[Symbol.isConcatSpreadable])
// log(initial.concat(arrayLikeObject))
// arrayLikeObject[Symbol.isConcatSpreadable] = true
// log(initial.concat(arrayLikeObject)) //[ 'foo', 'baz' ]

// // 不类数组对象
// let otherObject = new Set().add('qux')
// log(otherObject[Symbol.isConcatSpreadable])
// log(initial.concat(otherObject))
// otherObject[Symbol.isConcatSpreadable] = true
// log(initial.concat(otherObject)) //[ 'foo' ]  注意与上边的区别

// //Symbol.match Symbol.replace Symbol.search Symbol.split 都是类似的 String.prototype.match()方法里调用了后边实例中的[Symbol.match]方法，所以重写这个方法就改变了.match()的行为

// log('foobar'.match(/bar/))
// // log('foobar'.match('bar'))
// class StringMatcher {
//     constructor(str) {
//         this.str = str
//     }
//     [Symbol.match](target) {
//         //不按原来的正则表达式走了，按这种方法来   
//         return target.includes(this.str)
//     }
// }
// //相当于重写了[Symbol.match]方法，因为字符串调用match方法会
// log('foobar'.match(new StringMatcher('ob')))

//Symbol.toPrimitive

class Foo {}
let foo = new Foo()

log(3 + foo)
log(3 - foo)
log(String(foo))

class Bar {
    constructor() {
        this[Symbol.toPrimitive] = function(hint) {
            switch (hint) {
                case 'number':
                    return 3;
                case 'string':
                    return 'string bar';
                default:
                    return 'default bar'
                }
        }
    }
}

let bar = new Bar()
log(3+bar)
log(3-bar)
log(String(bar))
