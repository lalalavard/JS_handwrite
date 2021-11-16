// var result = "75team2017".match(/\d+\w*/g);
//
// console.log(result)


// (function() {
//     var x=foo();
//     var foo=function foo() {
//         return "foobar"
//     };
//     return x;
// })();


console.log(1 & 2);
console.log((() => {
}).length);
console.log(+[]);
console.log([1, 2, -3].reduce((a, b) => a - b, 0));

// (()=>{}).length; 获取方法形参个数，形参为0
// 1=0001 2=0010  按位与运算，同为1才为1，否则返回0
// +[] 隐式类型转换，因为[]是对象，所以toPrimitive->valueOf->toString为''，结果就是+''===0
// reduce对数组中的每个元素执行一个reducer函数(升序执行)，将其结果汇总为单个返回值。a为累计器累计回调的返回值，b为数组的每一项元素，传入初始值0->0-(1)->(-1)-2->(-3)-(-3)->0