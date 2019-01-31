javascript:(
	()=>{
		/*** Specify Version ***
		local - local files
		test - Testing branch on bitbucket
		release - release branch on bitbucket */
		var version="test";
		
		/*** STEALT MODE ***
		true - will show only on mouseover */
		var stealth=true;
		
		/*** Opacity *** 0-1*/
		var opacity=0.7;
		
		/*** Width, Height ***/
		var width=350;
		var height=250;
		
		var paths = [];
		paths["local_core"]="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Core2.js";
		paths["local_style"]="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Style.css";
		paths["test_core"]="https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/OliSmash-Core.js";
		paths["test_style"]="https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/OliSmash-Style.css";
		paths["release_core"]="https://rawgit.com/Zezis/OliSmash/release/OliSmash-Core.js";
        paths["release_style"]="https://rawgit.com/Zezis/OliSmash/release/OliSmash-Style.css";

        paths["local_jquery"]="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/jquery-3.3.1.min.js";
         paths["test_jquery"]="https://code.jquery.com/jquery-3.3.1.js";

        var tabs:TabEntity[] = [];
        let basePath = "https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/resources/";
        if(version == "local") basePath = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/resources/";
        tabs.push({name:"P1",src:basePath+"1.pdf"});
        tabs.push({name:"P1",src:basePath+"2.pdf"});
        tabs.push({name:"P1",src:basePath+"3.pdf"});
        tabs.push({name:"P1",src:basePath+"4.pdf"});
        tabs.push({name:"P1",src:basePath+"5.pdf"});
        tabs.push({name:"P1",src:basePath+"7.pdf"});
        tabs.push({name:"P1",src:basePath+"8.pdf"});
        tabs.push({name:"P1",src:basePath+"9.pdf"});
        tabs.push({name:"P1",src:basePath+"10.pdf"});
        

        var core_path = paths[version+"_core"];
		var jquery_path = paths[version+"_jquery"];
		var style_path = paths[version+"_style"];
		
		
		var style = document.createElement("link");
		style.setAttribute("rel", "stylesheet");
		style.setAttribute("type", "text/css");
		style.setAttribute("href", style_path);
		document.head.appendChild(style);	

        var jquer = document.createElement("script");
        jquer.onload= function () {
            console.log("jquery loaded");
            var script = document.createElement("script");
            script.onload= function () {
                new OliSmash({height:height,opacity:opacity,stealth:stealth, width: width},tabs);
            };
            script.setAttribute("src", core_path);
            document.head.appendChild(script);
		};
		jquer.setAttribute("src", jquery_path);
		document.head.appendChild(jquer);
	}
)();