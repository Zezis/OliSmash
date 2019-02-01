javascript: (function () {
    var version = "test";
    var stealth = true;
    var opacity = 0.80;
    var width = 350;
    var height = 250;
    var paths = [];
    paths["local_core"] = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Core.js";
    paths["local_style"] = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/OliSmash-Style.css";
    var cdnBasePath = "https://raw.githack.com/Zezis/OliSmash/test/build/";
    paths["test_core"] = cdnBasePath + "OliSmash-Core.js";
    paths["test_style"] = cdnBasePath + "OliSmash-Style.css";
    paths["release_core"] = "https://rawgit.com/Zezis/OliSmash/release/OliSmash-Core.js";
    paths["release_style"] = "https://rawgit.com/Zezis/OliSmash/release/OliSmash-Style.css";
    paths["local_jquery"] = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/jquery-3.3.1.min.js";
    paths["test_jquery"] = "https://code.jquery.com/jquery-3.3.1.js";
    var tabs = [];
    var basePath = cdnBasePath + "resources/";
    if (version == "local")
        basePath = "file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/resources/";
    tabs.push({ name: "1- Úvod", src: basePath + "1a.pdf" });
    tabs.push({ name: "1- Fragment", src: basePath + "1b.pdf" });
    tabs.push({ name: "2- Replikace", src: basePath + "2.pdf" });
    tabs.push({ name: "3- oracle-ddbms", src: basePath + "3.pdf" });
    tabs.push({ name: "3- MSSQL", src: basePath + "3b.pdf" });
    tabs.push({ name: "4- Integrace", src: basePath + "4.pdf" });
    tabs.push({ name: "5- Dotazy", src: basePath + "5.pdf" });
    tabs.push({ name: "7- Obj-Rel DB", src: basePath + "7.pdf" });
    tabs.push({ name: "8- Obj-Oracle", src: basePath + "8.pdf" });
    tabs.push({ name: "9- Warehouse", src: basePath + "9.pdf" });
    tabs.push({ name: "Moje zápisky", src: basePath + "mojezapisky.pdf" });
    tabs.push({ name: "Oracle úvod", src: basePath + "oracle-uvod.pdf" });
    tabs.push({ name: "1 - Př fragmentace", src: basePath + "1c.pdf" });
    var core_path = paths[version + "_core"];
    var jquery_path = paths[version + "_jquery"];
    var style_path = paths[version + "_style"];
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", style_path);
    document.head.appendChild(style);
    var jquer = document.createElement("script");
    jquer.onload = function () {
        console.log("jquery loaded");
        var script = document.createElement("script");
        script.onload = function () {
            new OliSmash({ height: height, opacity: opacity, stealth: stealth, width: width }, tabs);
        };
        script.setAttribute("src", core_path);
        document.head.appendChild(script);
    };
    jquer.setAttribute("src", jquery_path);
    document.head.appendChild(jquer);
})();
//# sourceMappingURL=OliSmash.js.map