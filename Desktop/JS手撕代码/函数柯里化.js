// ES6版本

//函数柯里化的思路
// 将函数参数不要一次全部接受  每次只接受1个参数 递归接受

const curry = (fn, arr = []) => (...args) =>
(
    arg => arg.length === fn.length ? fn(...arg) : curry(fn,arg)
    ([...arr,...args])
)

let curryTest = curry((a,b,c,d)=>a+b+c+d)

curryTest(1,2,3)(4) //应当返回10
curryTest(1,2)(4)(3) //应当返回10
curryTest(1,2)(3,4) //应当返回10
