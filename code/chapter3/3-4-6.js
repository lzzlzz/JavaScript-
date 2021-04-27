//模板字面量标签函数

let a = 6;
let b = 9;

const l = console.log
function simpleTag(strings, aVal, bVal, sumVal) {
    l(strings)
    l(aVal)
    l(bVal)
    l(sumVal)
    return 'foobar'
}

let untaggedResult = `${ a } + ${ b } = ${a+b}`
let taggedResult = simpleTag`${ a } + ${ b } = ${a+b}`

l(untaggedResult)
l(taggedResult)

function testTag(strings) {
    l(strings)
}
testTag`${a}`

//拼接字符串

function zipTag(strings, ...expressions) {
    return strings[0] + expressions.map((e, i) => `${e}${strings[i+1]}`).join('')
}

let zipTagResult = zipTag`${ a } + ${ b } = ${a+b}`
l(zipTagResult)