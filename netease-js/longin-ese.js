/**
 * Created by Administrator on 2017/9/14.
 */
var olog =  document.querySelector('#p_login')
var oesc = document.querySelector('#esc')
olog.onclick = function(){
    if(!localStorage.username){
        location.href = "login.html"
    }else {
        alert("客官，你已经登陆了哦！")
    }
}
oesc.onclick = function(){
    localStorage.clear();
    olog.innerHTML = "请,登陆";
}
if(localStorage.username){
    olog.innerHTML = localStorage.username;
}else {
    oesc.innerHTML = "";
}
