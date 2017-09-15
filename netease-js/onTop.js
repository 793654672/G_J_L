			var mainNav = document.querySelector('#main-nav');
				window.onscroll = function(e) {
					var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
					if (nowTop > 170) {
						mainNav.style.display = 'block';
						mainNav.style.position = 'fixed';
						mainNav.style.marginTop = 0;
					} else {
						mainNav.style.display = "none";
					}
				}
		
				function getAllTop(obj) {
					var allTop = obj.offsetTop;
					while (obj = obj.offsetParent) {
						allTop += obj.offsetTop;
					}
					return allTop;
				}