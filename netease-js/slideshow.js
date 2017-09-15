/**
 * Created by Administrator on 2017/9/12.
 */
var oRightBtn = document.getElementById('carousel_rightBtn');
var oLeftBtn = document.getElementById('carousel_leftBtn');
var oImagesLists = document.getElementById('imagesList').getElementsByTagName('li');
//var oCirclesLists = document.getElementById('circles').getElementsByTagName('li');
var index = 0;

oRightBtn.onclick = function() {
    index++;
    if(index > oImagesLists.length-1) {
        index = 0;
    }
    move()
}
oLeftBtn.onclick = function() {
    index--;
    if(index < 0) {
        index = oImagesLists.length - 1;
    }
    move()
}

//批量给小圆点绑定事件：
//for(var i = 0; i < oCirclesLists.length; i++) {
//    (function(i) {
//        oCirclesLists[i].onmouseover = function() {
//            index = i;
//            move()
//        }
//    })(i);
//}

//move()业务逻辑方法
function move() {
    for(var i = 0; i < oImagesLists.length; i++) {
        oImagesLists[i].className = '';
    }
    oImagesLists[index].className = "current";

    //for(var i = 0; i < oCirclesLists.length; i++) {
    //    oCirclesLists[i].className ='';
    //}
    //oCirclesLists[index].className ="current";
}
