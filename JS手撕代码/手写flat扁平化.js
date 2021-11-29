//数组扁平化 手写实现flat
function fakeFlat(arr) 
{
    let newArr = [];
    for(const i of arr)
    {
        if(Array.isArray(i))
        {
            newArr = [...newArr,...fakeFlat(i)]
        }else {
            newArr.push(i);
        }

    }
    return newArr;
}