class Login {
	constructor(btn) {
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	
	bindEvents () {
		let _this = this;
		this.btn.onclick = function () {
			_this.container.innerHTML = '<h4>发布框</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>内　容：<textarea id="password"></textarea></label></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
			tools.showCenter(_this.container);
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			
		}
		
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let password = document.querySelector("#password").value;
					
					var date = new Date();
					function shijian (date) {
						var hour = date.getHours();
						var minute = date.getMinutes();
						var second = date.getSeconds();
						return hour + "时" + minute + "分" + second +"秒";
					}
					document.write(password+"<br>",shijian(date));
					case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
			
			
		}
	}
}
