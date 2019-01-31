javascript: (function () {
    var version = "local";
    var stealth = false;
    var opacity = 1;
    var width = 350;
    var height = 250;
    var paths = [];
    paths["local_core"] = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Core.js";
    paths["local_style"] = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/OliSmash-Style.css";
    paths["test_core"] = "https://rawgit.com/Zezis/OliSmash/test/OliSmash-Core.js";
    paths["test_style"] = "https://rawgit.com/Zezis/OliSmash/test/OliSmash-Style.css";
    paths["release_core"] = "https://rawgit.com/Zezis/OliSmash/release/OliSmash-Core.js";
    paths["release_style"] = "https://rawgit.com/Zezis/OliSmash/release/OliSmash-Style.css";
    var core_path = paths[version + "_core"];
    var style_path = paths[version + "_style"];
    var script = document.createElement("script");
    script.onload = function () {
    };
    script.setAttribute("src", core_path);
    document.head.appendChild(script);
})();
//# sourceMappingURL=OliSmash.js.map