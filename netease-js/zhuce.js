var ousername = document.querySelector('#yonhu');
			var opassword = document.querySelector('#omma');
			var opassword_1 = document.querySelector('#omma_1');
			var osubmit = document.querySelector('#sub');
			
			var ozhishi = document.querySelector('#zhishi');
			var ozhishi_1 = document.querySelector('#zhishi_1');
			var ozhishi_2 = document.querySelector('#zhishi_2');
			
			var ouse = false;
			var opass = false;
			var opassw = false;
			var all;
			
			function ufo() {
				all = ouse&&opass&&opassw;
//				console.log("all"+all)

				osubmit.disabled=!all;
				if(all){
					osubmit.id="sub_false";
				}else{
					osubmit.id='sub';
				}
			}
			ousername.onblur=function(){
				if(/^[a-z]{6,11}$/.test(this.value)){
					ouse = true;
					ozhishi.style.display = "none"
				}else{
					ouse = false;
					ozhishi.style.display = 'block';
//			        
				}
//				console.log("arr"+arr)
				ufo()
			};
			opassword.onblur=function(){
				if(/^[0-9]{6,11}$/.test(this.value)){
					opass = true;
					ozhishi_1.style.display = "none"
					
				}else{
					opass = false	;
					ozhishi_1.style.display="inline-block"
					
				}
//				console.log("arr"+ayy)
				ufo()
			}
			opassword_1.onblur=function(){
//				if(!(/^\\b{6,11}&/).test(this.value)){
//					att = false
//					ufo()
//				}else if (this.value!=suf.value) {
//					att = false
//				}else{
//					att = true
//				}
				if(opassword.value === opassword_1.value){
					opassw= true;
					ozhishi_2.style.display = "none";
					
					ufo()
				}else{
					opassw = false;
					ozhishi_2.style.display="block";
					ufo()
				}
			};
			
			osubmit.onclick = function(){
			  	if (opassword.value != opassword_1.value){
					opassw = false;
					ufo();
				}else {
					myajax.post('http://h6.duchengjiu.top/shop/api_user.php', {
						status:'register',
						username:yonhu.value,
						password:omma.value
					},function(error, responseText){
						var json = JSON.parse(responseText);
						console.log(json);
						localStorage.token = json.data.token;
						localStorage.username = json.data.username;
						console.log(localStorage.token);
						console.log(localStorage.username);
						//如果localstorage里面有backurl, 我们就跳过去, 否则跳回首页
						if (localStorage.backurl) {
							location.href = localStorage.backurl;
							console.log(localStorage.backurl)

						} else {
							location.href = '../netease-shop/login.html';
							alert('注册成功')
						}
					});
				}
			};

			




//var oSpans = document.getElementById('tab_hd').getElementsByTagName('span');
////得到body部分的所有div
//var oDivs = document.getElementById('tab_bd').getElementsByTagName('div');
////循环批量绑定事件
//for (var i = 0; i < oSpans.length; i++) {
//  //IIFE将外部的i传递到内部的i
//  (function(i){
//    //绑定鼠标移入事件
//    oSpans[i].onmouseover = function () {
//      //排他模型，让所有的div隐藏，让当前对应的div显示
//      for (var j = 0; j < oDivs.length; j++) {
//        oDivs[j].className = '';//将class属性的值设置为空
//      }
//      //当前的i对应的div显示
//      oDivs[i].className = 'current';
//      //把所有的span元素的class样式设置为空
//      for (j = 0; j < oSpans.length; j++) {
//        oSpans[j].className = '';
//      }
//      //给最后一个span元素的 class名称设置为last
//      oSpans[oSpans.length - 1].className = 'last';
//      //给当前的span元素的类名 +是一个空格 current类名, 因为最后一个span默认有一个class为last, 添加后的为 last current。其他元素添加类名之后他的类名是 " current"
//      this.className += ' current'; //class的类名
//    }
//  })(i);
//}



