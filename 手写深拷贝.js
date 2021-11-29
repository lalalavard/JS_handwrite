//深拷贝
//除了JSON.parse(JSON.stringify(obj))外都是浅拷贝，或者手写  判断数组还是对象后递归拷贝
//包括object.assgin() ...拓展运算符, concat(),只是深拷贝了基本数据的一层，引用数据还是浅拷贝


function deepClone(target,cache = new WeakMap())
{
    //基本数据类型直接返回原值
    if(typeof target !== "Object") return target;
    //判断是数组还是对象
    const result = Array.isArray(target) ? []:{};
    if (cache.get(target)) return  cache.get(target);
    cache.set(target,value);
    for(const k in target) {
        result[k] = deepClone(target[k],cache);
    }
    return result;
}
