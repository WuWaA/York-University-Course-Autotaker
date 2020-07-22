/* auto taker - https://wrem.sis.yorku.ca */
/* https://github.com/WuWaA/York-University-Course-Autotaker */
/*
 * AUTHOR: WuWaA (GitHub)
 * LICENSE: MIT License
 * 转载/使用/修改，须保留此信息
 */

var course = [ "E39F02" ]; // course id 课程代码
var course_type = 2;
// 2 -> the third option, details in readme: https://github.com/WuWaA/York-University-Course-Autotaker
// 数字2对应第3个选项，说明详见：https://github.com/WuWaA/York-University-Course-Autotaker

var vsb_url = "https://schedulebuilder.yorku.ca/vsb/criteria.jsp?term=2020102119&locs=any&course_0_0=LE-EECS-3101-3.00-EN-&cs_0_0=--2020070_E39F01-E39F02-&ca_0_0=0";
// The URL in Visual Schedule Builder, details in readme: https://github.com/WuWaA/York-University-Course-Autotaker
// 虚拟选课VSB的URL, 说明详见：https://github.com/WuWaA/York-University-Course-Autotaker

var short_operation = 500; // 2500 -> two and half seconds 2.5秒
var long_operation = 1000; // 5000 -> five seconds 5秒
var random_rate = 500; // 1500 -> one and half times 1.5秒

console.log( '[' + new Date().toTimeString() + ']' );

setTimeout( autoall(), 1000 );

// window.onload = function()
// {
//     console.log("onload");
//     autoall();
// };

function autoall ()
{
    autocheck();
    if ( where() === 0 )
    {
        console.log( "Step 0" );
        setTimeout( function ()
        {
            autoselect( course_type );
        }, short_operation + Math.random() * random_rate );

        setTimeout( function ()
        {
            autoclick( "value", "Continue" );
        }, long_operation + Math.random() * random_rate );
    }
    if ( where() === 1 )
    {
        console.log( "Step 1" );
        setTimeout( function ()
        {
            autoclick( "title", "Add a Course" );
        }, short_operation + Math.random() * random_rate );
    }
    if ( where() === 2 )
    {
        console.log( "Step 2" );
        setTimeout( function ()
        {
            var url = document.location.href;
            var index = url.lastIndexOf( "/" ) + 1;
            var number = url.substring( index ) / 5;
            console.log( "[Number] " + number + " [Integer] " + parseInt( number ) + " [Course] " + course[ parseInt( number ) ] );
            autofill( course[ parseInt( number ) ] );
        }, short_operation + Math.random() * random_rate );

        setTimeout( function ()
        {
            autoclick( "value", "Add Course" );
        }, long_operation + Math.random() * random_rate );
    }
    if ( where() === 3 )
    {
        console.log( "Step 3" );
        setTimeout( function ()
        {
            autoclick( "value", "Yes" );
        }, short_operation + Math.random() * random_rate );
    }
    if ( where() === 4 )
    {
        console.log( "Step 4" );
        autofinish(); // if course successfully added 如果刷课成功则自动跳转
        setTimeout( function ()
        {
            autoclick( "value", "Continue" );
        }, short_operation + Math.random() * random_rate );
    }
    if ( where() === 5 )
    {
        console.log( "Step 5" );
        setTimeout( function ()
        {
            window.location.href = "https://wrem.sis.yorku.ca/Apps/WebObjects/REM.woa/wa/DirectAction/rem";
        }, short_operation + Math.random() * random_rate );
    }
}

function where ()
{
    if ( $( "select" ).length == 1 )
        return 0;
    if ( $( "input[title='Add a Course']" ).length == 1 )
        return 1;
    if ( $( "input[value='Add Course']" ).length == 1 )
        return 2;
    if ( $( "input[value='Yes']" ).length == 1 )
        return 3;
    if ( $( "input[value='Continue']" ).length == 1 )
        return 4;
    if ( $( ":contains('exceeded the maximum time limit')" ).length >= 10 ) // session expired 会话过期
        return 5;
}

function autoclick ( name, value )
{
    $( 'input[' + name + '="' + value + '"]' ).click();
}

function autofill ( content )
{
    $( "input[maxlength='6']" ).attr( "value", content );
}

function autocheck ()
{
    // if (course.length == 0)
    // {
    //     window.location.href=vsb_url;
    // }
    var wuwaa = document.location.href;
    var niceball = wuwaa.lastIndexOf( "/" ) + 1;
    if ( wuwaa.substring( niceball ) > 9 )
    {
        window.location.href = vsb_url;
    }
}

function autoselect ( option )
{
    $( "select" ).find( "option[value='" + option + "']" ).attr( "selected", true );
}

function autofinish ()
{
    if ( $( ":contains('successfully')" ).length >= 10 )
        window.location.href = "https://yorku.ca/";
}