/**
 * Created by Administrator on 2017/9/14.
 */
var oinput1 = document.querySelector('#username')
var oinput2 = document.querySelector('#password')
var oinput3 = document.querySelector('#userlogin')

oinput3.onclick = function(){
    myajax.post('http://h6.duchengjiu.top/shop/api_user.php', {
        status:'login',
        username:username.value,
        password:password.value
    },function(error, responseText){
        var json = JSON.parse(responseText);
        console.log(json);

        if(json.code !==0){
            alert("用户名不存在")
        }else if(json.code===0){
            localStorage.token = json.data.token;
            localStorage.username = json.data.username;
            location.href = '../netease-shop/index.html';
        }
        //如果localstorage里面有backurl, 我们就跳过去, 否则跳回首页
//            if (localStorage.backurl) {
//                location.href = localStorage.backurl;
//                console.log(localStorage.backurl)
//            } else {
//            　}
    });
}


