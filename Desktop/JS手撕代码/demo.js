function Foo()
{
    var i = 0;
    return function a()
    {
        console.log(i++);
    }
}
document.appendChild()
var f1 = Foo();
 f2 = Foo();

f1();
f1();
f2();
//结果:0 1 0


//     var bb = 1;
//     function aa(bb) {
//     bb = 2;
//  console.log(bb);
// };
//     aa(bb);
// console.log(bb);

