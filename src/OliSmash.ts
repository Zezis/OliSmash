javascript:(
	()=>{
		/*** Specify Version ***
		local - local files
		test - Testing branch on bitbucket
		release - release branch on bitbucket */
		var version="test";
		
		/*** STEALT MODE ***
		true - will show only on mouseover */
		var stealth=false;
		
		/*** Opacity *** 0-1*/
		var opacity=1;
		
		/*** Width, Height ***/
		var width=350;
		var height=250;
		
		var paths = [];
		paths["local_core"]="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Core.js";
		paths["local_style"]="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/OliSmash-Style.css";
		paths["test_core"]="https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/OliSmash-Core.js";
		paths["test_style"]="https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/OliSmash-Style.css";
		paths["release_core"]="https://rawgit.com/Zezis/OliSmash/release/OliSmash-Core.js";
		paths["release_style"]="https://rawgit.com/Zezis/OliSmash/release/OliSmash-Style.css";
		
		var core_path = paths[version+"_core"];
		var style_path = paths[version+"_style"];
		
		
		var style = document.createElement("link");
		style.setAttribute("rel", "stylesheet");
		style.setAttribute("type", "text/css");
		style.setAttribute("href", style_path);
		document.head.appendChild(style);	

		var script = document.createElement("script");
		script.onload= function () {
			//smasher_init(stealth,opacity,width,height);
		};
		script.setAttribute("src", core_path);
		document.head.appendChild(script);
	}
)();