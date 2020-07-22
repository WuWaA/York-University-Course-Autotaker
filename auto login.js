/* auto login - https://passportyork.yorku.ca/ppylogin/ppylogin */
/* https://github.com/WuWaA/York-University-Course-Autotaker */
/*
 * AUTHOR: WuWaA (GitHub)
 * LICENSE: MIT License
 * 转载/使用/修改，须保留此信息
 */

var uname = "your login name"; // yorku login name 约克大学登录用户名
var upass = "your login password"; // yorku login password 约克大学登录密码

// window.onload = function()
setTimeout( function ()
{
    $( 'input[name="mli"]' ).blur();
    setTimeout( function ()
    {
        $( 'input[name="mli"]' ).attr( "value", uname );
    }, 2000 );

    setTimeout( function ()
    {
        $( 'input[name="password"]' ).attr( "value", upass );
    }, 3000 );

    setTimeout( function ()
    {
        $( 'input[name="dologin"]' ).click();
    }, 4000 );
}, 1000 );
