# York-University-Course-Autotaker
Script to check and enrol fulled course automatically  
约克大学自动刷课脚本，适用于人满了的课

## Known Bug 已知问题
If the course is "Remaining seats may be restricted" status and you are not in the remaining range, then the Visual Schedule Builder will shown seats available and this script will keep trying to enrol until you are been blocked by system.  
This bug can be easily fixed. You could check if enrol result page has any related message, and then redirected to another page (then the script will stopped).  
The only reason I didn't fix it is because I'm about to graduate and no longer use this script.

如果课程状态为“保留位置”而你又不属于被保留范围的话，虚拟选课会显示有位置，进而不断重试注册课程，最后会被系统Ban掉，需要给注册办公室写邮件解封。  
这个问题其实可以解决，只需要在注册结果页面检测有没有“保留位置”然后跳转其他页面就行了，不过我懒（而且已经快毕业不需要刷课了）所以没写。

## Implement 实现
Using JavaScript to simulate mouse click (during write this script, I'm too lazy to find enrol POST/GET request).  
用自动点击的方式实现的，因为懒得去找具体的POST/GET请求。

## Usage 如何使用
First you need chrome and extension called 'User JavaScript and CSS', you could install it by URL below.  
首先你需要Chrome以及Chrome插件User JavaScript and CSS，你可以从下方的URL下载安装。  
`https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld`

Then right click 'User JavaScript and CSS', select 'Option' (or 'Setting' or other similar word).  
然后右键User JavaScript and CSS，点选项。  
（待补图）

Select 'Add', add three scripts just like screen shot below.  
选择Add，将三个脚本都加进去，具体如图所示。  
需要注意的是，红框内的内容来源为蓝框处。  
（待补图）

After change the variables below, just open the Visual Schedule Builder and script will start running.
修改下方的参数为你自己所需的内容后，打开Visual Schedule Builder即可开始自动刷课。

### 脚本中需要修改的部分
  - auto login: `uname`, `upass`
  - auto taker: `course`, `course_type`, `vsb_url`
  - auto wait: `vsb_url`

### 详解
- `uname`
  YorkU Login Name 约克大学登录用户名
- `upass`
  YorkU Login Password 约克大学登录密码
- `course`
  Course ID 课程代码  
  例如`E39F02`
- `course_type`
  如图所示，第一个选项`Summer 2020`对应数字0，第二个选项`WINTER 2021-GRADUATE STUDENTS OR OSGOODE STUDENTS`对应数字1，以此类推  
  如果你要选择的是`FALL/WINTER 2020-2021 UNDERGRADUATE STUDENTS`，则将`course_type`设为3  
  （待补图）
- `vsb_url`
  打开Visual Schedule Builder（本说明中有时简称VSB或虚拟选课），添加一门你想选但是已满的课  
  如图所示，红框内就是URL，将替换`vsb_url`的测试用URL替换为你的红框内的URL即可  
  （待补图）

附 Visual Schedule Builder `https://schedulebuilder.yorku.ca/`

## Contributor 贡献者
WuWaA / 王好球 / Pseudo
以上三个都是我 :stuck_out_tongue_winking_eye:
WeChat: WuWaA_WeChat
Twitter: @niceball_wuwaa

## License 协议
[MIT](LICENSE) © WuWaA
