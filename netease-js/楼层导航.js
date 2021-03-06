/**
 * Created by Administrator on 2017/9/12.
 */

//左侧导航条的li
var leftNavLis = document.getElementById("leftNav").getElementsByTagName("li");
//得到所有楼层div，由于我们的楼层div没有放到同一个div里面，所以不好通过getElementsByTagName得到
//那么我们就要遍历body的所有儿子，看看哪个儿子nodeType属性是1，并且有类型floor
var floorArr = []; //所有floor的div
var floorOffsetTopArr = []; //所有floor的offsetTop值

for(var i = 0; i < document.body.childNodes.length; i++) {
    if(document.body.childNodes[i].nodeType == 1 && document.body.childNodes[i].className.indexOf("floor") != -1) {
        floorArr.push(document.body.childNodes[i]);
        floorOffsetTopArr.push(document.body.childNodes[i].offsetTop);
    }
}

var floorArrLength = floorArr.length;

//offsetTop这个数组，里面存放的是所有.floor楼层的offsetTop值，数组的最后一项应该就是最后一个楼层
//的下边框距离页面顶部的距离。
floorOffsetTopArr.push(floorArr[floorArrLength - 1].clientHeight + floorOffsetTopArr[floorArrLength - 1]);

//当前楼层信号量，NaN表示不在任何楼层里
var nowfloor = NaN;
//页面卷动事件
window.onscroll = function() {
    //备份一下老楼层编号
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //判断此时在第几个楼层，就相当于判断我们现在的卷动值在正序数组中的第几位
    for(var i = 0; i < floorArrLength; i++) {
        if(scrollTop >= floorOffsetTopArr[i] - 200 && scrollTop < floorOffsetTopArr[i + 1] - 200) {
            //此时在第i层，但是我们为了防止动画、DOM操作频繁触发，仅当楼层编号发生变化的时候
            //再做里面的事情，验证i有没有变化
            if(i != nowfloor) {
                !isNaN(nowfloor) && (leftNavLis[nowfloor].className = "");
                //更改信号量
                nowfloor = i;
                //让新的信号量加cur
                leftNavLis[nowfloor].className = "cur";
            }

            break;
        }
    }

    //如果在数组中没有找到合适的位置：
    if(i == floorArrLength) {
        //老信号量这个人去掉cur
        !isNaN(nowfloor) && (leftNavLis[nowfloor].className = "");
        nowfloor = NaN;
    }
}

//左侧导航li的监听
for(var i = 0; i < leftNavLis.length; i++) {
    leftNavLis[i].index = i;
    leftNavLis[i].onclick = function() {
        idx = this.index;
        scrollAnimate(floorOffsetTopArr[this.index], 600);
    }
}

//窗口动画函数
function scrollAnimate(target, time) {
    var frameNumber = 0; //帧编号
    var start = document.body.scrollTop || document.documentElement.scrollTop; //起点
    var distance = target - start;
    var interval = 10;
    var maxFrame = time / interval;

    clearInterval(timer);
    var timer = setInterval(function() {
        frameNumber++;
        if(frameNumber == maxFrame) {
            clearInterval(timer);
        }
        //第一个参数t表示当前帧编号
        //第二个参数b表示起始位置
        //第三个参数c表示变化量
        //第四个参数d表示总帧数
        //返回当前帧应该在哪儿
        document.body.scrollTop = document.documentElement.scrollTop = CubicEaseInOut(frameNumber, start, distance, maxFrame);
    }, 10);

    function CubicEaseInOut(t, b, c, d) {
        if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
}
