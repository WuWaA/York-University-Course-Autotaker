/* auto wait - https://schedulebuilder.yorku.ca */
/* https://github.com/WuWaA/York-University-Course-Autotaker */
/*
 * AUTHOR: WuWaA (GitHub)
 * LICENSE: MIT License
 * 转载/使用/修改，须保留此信息
 */

var timer = ( 60000 ); // 60000 -> 60 seconds -> 1 minute
// console.log(timer);
var vsb_url = "https://schedulebuilder.yorku.ca/vsb/criteria.jsp?term=2020102119&locs=any&course_0_0=LE-EECS-3101-3.00-EN-&cs_0_0=--2020070_E39F01-E39F02-&ca_0_0=0";
// The URL in Visual Schedule Builder, details in readme: https://github.com/WuWaA/York-University-Course-Autotaker
// 虚拟选课VSB的URL, 说明详见：https://github.com/WuWaA/York-University-Course-Autotaker

setTimeout( function ()
{
    if ( $( ".seatText" ).length > 0 )
    {
        console.log( '[' + new Date().toTimeString() + '] Case 1' );
        autojump();
    }
    else
    {
        console.log( '[' + new Date().toTimeString() + '] Case 2' );
        setTimeout( function () { autoreload(); }, timer );
    }
}, 5000 );

function autojump ()
{
    window.location.href = "https://wrem.sis.yorku.ca/Apps/WebObjects/REM.woa/wa/DirectAction/rem";
}

function autoreload ()
{
    window.location.href = vsb_url;
}