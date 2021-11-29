// 逃课版深拷贝 JSON.parse(JSON.stringify( someobj))

// 严格遵守JSON序列化规则，有缺陷 比如date对象就不行

var newObj = JSON.parse(JSON.stringify(obj));




//正式版

//思路 递归拷贝， 浅拷贝只拷贝第一层， 深拷贝 基本类型和引用类型都拷贝


function deepClone (obj)
//判断是否是基本数据类型
{
    //引用数据类型
    if(typeof obj == "object")
    {
        var result = obj.constructor == Array ? [] : {};
        for (let i in obj)
        {
            result[i] = typeof  obj[i] == "object" ? deepClone(obj[i]): obj[i];
        }
    }else
    {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return  result;
}