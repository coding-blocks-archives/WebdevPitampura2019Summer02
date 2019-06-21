var x = "Hello"
console.log(x)

typeof 2
"number"
typeof "2"
"string"
typeof 'a'
"string"
typeof true
"boolean"
typeof 1.4
"number"
typeof [1, 2, 3]
"object"
typeof null
"object"
typeof undefined
"undefined"
var x
undefined
console.log(x)
VM595:1 2
undefined
var y
undefined
console.log(y)
VM650:1 undefined
undefined
y = "undefined"
"undefined"
typeof y
"string"
console.log(y)
VM756:1 undefined
undefined
Number.MAX_SAFE_INTEGER
9007199254740991
Number.MAX_VALUE
1.7976931348623157e+308

// Objects
var obj = {
    name: "Abhishek",
    age: 22,
    nested: {
        key: "Value"
    }
}
undefined
obj
{name: "Abhishek", age: 22, nested: {…}}age: 22name: "Abhishek"nested: {key: "Value"}__proto__: Object
obj.name
"Abhishek"
var keyName = "age"
undefined
obj.keyName
undefined
obj["age"]
22
obj[keyName]
22
obj.nested.key
"Value"
obj["nested"]["key"]
"Value"
obj.newKey = "var"
"var"
obj.newKey
"var"
Object.keys(obj)
(4) ["name", "age", "nested", "newKey"]


// Nonsense JS

1 == "1"
true
true == "true"
false
false == "false"
false
true == 1
true
false == 0
true
[] == 0
true
+[]
0
+[1]
1
+[1, 3]
NaN
2.0/"sds"
NaN
2.0/"2"
1
typeof NaN

"number"
isNaN(2.0/"ss")
true
isNaN(2.0/"2")
false
var y
undefined
typeof y == "undefined"
true
y == undefined
true
typeof typeof 2
"string"
1 === "1"
false
false === 0
false
false === false
true
1 + "1" === "11"
true
1*"11"
11
1 + "11"
"111"
isNan(NaN)
VM2490:1 Uncaught ReferenceError: isNan is not defined
    at <anonymous>:1:1
(anonymous) @ VM2490:1
isNaN(NaN)
true
var z
undefined
1 + z
NaN
1 + typeof z
"1undefined"
[] + {}
"[object Object]"
var obj = { x: 2}
undefined
obj.toString()
"[object Object]"
obj.toString = () => "hello"
() => "hello"
obj.toString()
"hello"
[] + obj
"hello"
[] + {}
"[object Object]"
{} + []
0
{} + {}
"[object Object][object Object]"
{} + []
0
({} + [])
"[object Object]"
+{}
NaN
{} + {}
"[object Object][object Object]"
5 + {}
"5[object Object]"
window.toString()
"[object Window]"
{} + 5
5
5 + {}
"5[object Object]"


// Strings
var name = "Abhishek"
undefined
typeof name
"string"
name[0]
"A"
name[0] = "B"
"B"
name
"Abhishek"
name.length
8
name.bold()
"<b>Abhishek</b>"
name
"Abhishek"
var url = "https://www.mozilla.org/en-US/firefox/download/thanks/"
undefined
url.split("/")
(8) ["https:", "", "www.mozilla.org", "en-US", "firefox", "download", "thanks", ""]
url.split("/t")
(2) ["https://www.mozilla.org/en-US/firefox/download", "hanks/"]
url.split("/")[0]
"https:"
url.substr(5, 10)
"://www.moz"
url.substr(5, 10).length
10
url.substring(5, 10)
"://ww"
url.substring(5, -1)
"https"


// Arrays
arr[13] = { x: { y: [{ z: 3 }] } }
[1, 2, 3]
(3) [1, 2, 3]
var arr = [1, 2, 3]
undefined
arr.length
3
arr[0]
1
arr[0] = 2
2
arr[0]
2
arr[10] = "ddd"
"ddd"
arr
(11) [2, 2, 3, empty × 7, "ddd"]
arr[11] = [ 1, 3, [5, 6] ]
(3) [1, 3, Array(2)]
arr[11][0]
1
arr
(12) [2, 2, 3, empty × 7, "ddd", Array(3)]0: 21: 22: 310: "ddd"11: Array(3)0: 11: 32: (2) [5, 6]length: 3__proto__: Array(0)length: 12__proto__: Array(0)
arr[13] = { x : { y: [ { z: 3 } ] } }
{x: {…}}
typeof arr
"object"
arr.concat([4, 5, 6])
(17) [2, 2, 3, empty × 7, "ddd", Array(3), empty, {…}, 4, 5, 6]
arr
(14) [2, 2, 3, empty × 7, "ddd", Array(3), empty, {…}]

