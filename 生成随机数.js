//随机算法

function shuffle(_arr) 
{
    let arr = _arr;
    const newArr = [];
    while (arr.length) 
    {
        const i = random(0,arr.length-1);
        newArr.push(arr[i]);
        arr = arr.filter(j=>arr[i] !==j);
    }
}