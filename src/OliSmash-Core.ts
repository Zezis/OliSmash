class U{
    public static dragElement(container:JQuery, handle:JQuery) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;       

        var dragMouseDown= (e:any)=> {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        var elementDrag = (e) => {
            e = e || window.event;
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            container.css("top",container.offset().top  - pos2 );
            container.css("left",container.offset().left  - pos1 );
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        handle.mousedown((e)=>{dragMouseDown(e);});
    }
}



class TabManager{
    public linkDiv: JQuery;
    public tabsContainer:JQuery;
    public dropdown:JQuery;
    public tabs:JQuery[] = [];
 
    constructor(linkDiv: JQuery,tabsContainer:JQuery){
        this.linkDiv = linkDiv;
        this.tabsContainer = tabsContainer;
        this.createDropdownMenu();
    }

    private createDropdownMenu(){
       this.dropdown = $( 
        `<div class="smash-dropdown">
            <button>TABS:</button>
            <div class="smash-dropdown-content">
            </div>
        </div>`);

        this.linkDiv.append(this.dropdown);
    }

    public addIframeTab(name:string,src:string){
       
        let content = $('<iframe class="tabcontent" src="'+src+'">');
        this.tabs.push(content);
        
        let link = $(`<a>${name}</a>`)
        link.click(()=>{
            this.tabsContainer.children(".tabcontent").hide();
            this.dropdown.children("button").text("TABS: "+name);
            content.show();
        });

        this.dropdown.children(".smash-dropdown-content").append(link); 
        this.tabsContainer.append(content);
    }
}



interface OliOptions{
    stealth?:boolean;
    opacity?:number;
    width?:number;
    height?:number;
};

interface TabEntity{
    src:string;
    name: string;
}


class OliSmash{
    private container:JQuery;
    private header:JQuery;
    private linkDiv:JQuery;
    private body:JQuery;
    private options : OliOptions = {stealth : true, height:250, width:250, opacity:1};
    private tabManager:TabManager;

    constructor(opts?:OliOptions,tabs?:TabEntity[]){
        if(opts){
            if(opts.height) this.options.height = opts.height;
            if(opts.width) this.options.width = opts.width;
            if(opts.stealth != undefined) this.options.stealth = opts.stealth;
            if(opts.opacity) this.options.opacity = opts.opacity;
        }

        this.createBody();
        this.tabManager = new TabManager(this.linkDiv,this.body);
        this.addTabs(tabs);

        let exitBtn = $('<button>Close</button>');
        exitBtn.click(()=>{this.container.remove();});
        this.linkDiv.append(exitBtn);

        
        if(this.options.stealth)this.setupMoseOver();
        U.dragElement(this.container,this.header);


        this.container.css("opacity",this.options.opacity);
        this.body.css("width",this.options.width);
        this.body.css("height",this.options.height);
    }

    private createBody(){
        this.container = $('<div id="smash_div"></div>');
        this.container.hide();
        this.container.append(this.header = $('<div id="smash_divheader">OliSmash !!!</div>'));
        this.container.append(this.linkDiv = $('<div id="smash_linkDiv"></div>'));
        this.container.append(this.body =$('<div id="smash_tabcontainer"></div>'));
        
        this.hide();
        //src="https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html"
        //this.container.append(this.body =$('<iframe id="smash_div_textarea" class="tabcontent" src="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/chat-iframe.html">'));
        $("body").append(this.container);
        this.container.show();        
    }

    private addTabs(tabs?:TabEntity[]){
        this.tabManager.addIframeTab("CHAT","https://raw.githack.com/Zezis/OliSmash/test/build/chat-iframe3.html");

        if(tabs){
            tabs.forEach(t=>{
                this.tabManager.addIframeTab(t.name,t.src);
            });
        }
    }

    private setupMoseOver(){
        this.container.mouseover(()=>{this.show(); });
        this.container.mouseout(()=>{this.hide();});
    }

    private hide(){
        console.log("hiding");
        this.body.css("visibility","hidden");
        this.header.css("visibility","hidden");
        this.linkDiv.css("visibility","hidden");
    }
    private show(){
        this.body.css("visibility","visible");
        this.header.css("visibility","visible");
        this.linkDiv.css("visibility","visible");
    }
}