//防抖
//玩过LOL吗，按B回城不管按多少次，都是最后一次再过8秒才能回
//只执行最后一次，在最后一次继续被点击则重新计时


//参数 1.fn 要进行防抖的函数 2.定时器的延迟时间t
function debounce(fn,t) 
{
    let timer = null;
    return function(){
        //每次调用都是初始化时间
        timer && clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this)
        },t)
    }
}


//节流
//一段时间内只执行一次，类似技能中的CD，用了技能过了CD才能继续用

function throttle(fn,t)
{
    let timer = null;
    return function(){
        if(timer) return;
        fn.apply(this);
        timer = function(){
            setTimeout(() => {
                clearTimeout(timer);
                timer = null;
            }, t)
        }
    }
}