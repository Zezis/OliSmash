var U = (function () {
    function U() {
    }
    U.dragElement = function (container, handle) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var dragMouseDown = function (e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        };
        var elementDrag = function (e) {
            e = e || window.event;
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            container.css("top", container.offset().top - pos2);
            container.css("left", container.offset().left - pos1);
        };
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        handle.mousedown(function (e) { dragMouseDown(e); });
    };
    return U;
}());
var TabManager = (function () {
    function TabManager(linkDiv, tabsContainer) {
        this.tabs = [];
        this.linkDiv = linkDiv;
        this.tabsContainer = tabsContainer;
        this.createDropdownMenu();
    }
    TabManager.prototype.createDropdownMenu = function () {
        this.dropdown = $("<div class=\"smash-dropdown\">\n            <button>TABS:</button>\n            <div class=\"smash-dropdown-content\">\n            </div>\n        </div>");
        this.linkDiv.append(this.dropdown);
    };
    TabManager.prototype.addIframeTab = function (name, src) {
        var _this = this;
        var content = $('<iframe class="tabcontent" src="' + src + '">');
        this.tabs.push(content);
        var link = $("<a>" + name + "</a>");
        link.click(function () {
            _this.tabsContainer.children(".tabcontent").hide();
            _this.dropdown.children("button").text("TABS: " + name);
            content.show();
        });
        this.dropdown.children(".smash-dropdown-content").append(link);
        this.tabsContainer.append(content);
    };
    return TabManager;
}());
;
var OliSmash = (function () {
    function OliSmash(opts, tabs) {
        var _this = this;
        this.options = { stealth: true, height: 250, width: 250, opacity: 1 };
        if (opts) {
            if (opts.height)
                this.options.height = opts.height;
            if (opts.width)
                this.options.width = opts.width;
            if (opts.stealth != undefined)
                this.options.stealth = opts.stealth;
            if (opts.opacity)
                this.options.opacity = opts.opacity;
        }
        this.createBody();
        this.tabManager = new TabManager(this.linkDiv, this.body);
        this.addTabs(tabs);
        var exitBtn = $('<button>Close</button>');
        exitBtn.click(function () { _this.container.remove(); });
        this.linkDiv.append(exitBtn);
        if (this.options.stealth)
            this.setupMoseOver();
        U.dragElement(this.container, this.header);
        this.container.css("opacity", this.options.opacity);
        this.body.css("width", this.options.width);
        this.body.css("height", this.options.height);
    }
    OliSmash.prototype.createBody = function () {
        this.container = $('<div id="smash_div"></div>');
        this.container.hide();
        this.container.append(this.header = $('<div id="smash_divheader">OliSmash !!!</div>'));
        this.container.append(this.linkDiv = $('<div id="smash_linkDiv"></div>'));
        this.container.append(this.body = $('<div id="smash_tabcontainer"></div>'));
        this.hide();
        $("body").append(this.container);
        this.container.show();
    };
    OliSmash.prototype.addTabs = function (tabs) {
        var _this = this;
        this.tabManager.addIframeTab("CHAT", "https://raw.githack.com/Zezis/OliSmash/test/build/chat-iframe3.html");
        if (tabs) {
            tabs.forEach(function (t) {
                _this.tabManager.addIframeTab(t.name, t.src);
            });
        }
    };
    OliSmash.prototype.setupMoseOver = function () {
        var _this = this;
        this.container.mouseover(function () { _this.show(); });
        this.container.mouseout(function () { _this.hide(); });
    };
    OliSmash.prototype.hide = function () {
        console.log("hiding");
        this.body.css("visibility", "hidden");
        this.header.css("visibility", "hidden");
        this.linkDiv.css("visibility", "hidden");
    };
    OliSmash.prototype.show = function () {
        this.body.css("visibility", "visible");
        this.header.css("visibility", "visible");
        this.linkDiv.css("visibility", "visible");
    };
    return OliSmash;
}());
//# sourceMappingURL=OliSmash-Core.js.map