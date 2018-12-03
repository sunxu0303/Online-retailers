(function(public) {

	public.closeChildWebviewOfhide = function(currentWebview, closedWebviewId) {
			currentWebview.addEventListener('hide', function() {

				var closeWeb = plus.webview.getWebviewById(closedWebviewId);

				if (!currentWebview.getURL() || !closeWeb) {
					return;
				}
				closeWeb.close();
				closeWeb = null;
			}, false);
		}

	public.closeChildWebviewOfclose = function(currentWebview, closedWebviewId) {
		currentWebview.addEventListener('close', function() {
			var closeWeb = plus.webview.getWebviewById(closedWebviewId);
			if (!currentWebview.getURL() || !closeWeb) {
				return;
			}
			closeWeb.close();
			closeWeb = null;
		}, false);
	}

	
	public.getaniShow = function() {
		var aniShow = 'slide-in-right';
		if (mui.os.android) {
			var androidlist = document.querySelectorAll('ios-only');
			if (androidlist) {
				mui.each(androidlist, function(num, obj) {
					obj.style.display = 'none';
				});
			}

			if (parseFloat(mui.os.version) < 4.4) {
				aniShow = 'slide-in-right';
			}
		}

		return aniShow;
	}

	public.pushWebView = function(options) {
		var webview = plus.webview.getWebviewById('template');
		mui.fire(webview, options.webType, {
			id: options.id,
			href: options.href,
			aniShow: options.aniShow,
			title: options.title,
			isBars: options.isBars,
			barsIcon: options.barsIcon,
			extendOptions: options.extendOptions
		});
	}

	//设置是否需要bounce，一般有scroll的地方会将bounce取消掉
	public.setSubWebviewBounce = function(bounce) {
		var curSubWebview = plus.webview.currentWebview();
		curSubWebview.setStyle({
			bounce: bounce
		});
	}

	public.setMask = function(options) {

		var menu = null;
		
		var mask = null;
		var maskBool = true;
		var main = plus.webview.getWebviewById('HBuilder');
		mui.fire(main, 'showMask', {
			'id': plus.webview.currentWebview().id
		});

		if (mask == null) {

			mask = mui.createMask(function() { 
				
				
				console.log(maskBool);
				if (maskBool == true) {

//					menu.close();
					mui.fire(main, 'hiddeMask', {});
					
				}
			});
		} else {

			maskBool = true;
		}
		mask.show();


		document.addEventListener('hiddeMask', function() {

			maskBool = false;
			mask.close();
//			menu.close();
		});
		
		
		 menu = mui.preload({
						id: 'offcanvas-drag-left-plus-menu',
						url: '../event/webview_Alert.html',
						styles: {
							left: "30%",
							height:'200px',
							width:'200px',
							zindex: 99999
						}
						});
						
						var main = plus.webview.currentWebview();
						menu.show();
		
	}

})(window);