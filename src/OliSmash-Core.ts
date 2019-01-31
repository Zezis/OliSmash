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
    constructor(linkDiv: JQuery,tabsContainer:JQuery){
        this.linkDiv = linkDiv;
        this.tabsContainer = tabsContainer;
    }

    public addIframeTab(name:string,src:string){
        let link = $('<button>'+name+'</button>');
        let content = $('<iframe class="tabcontent" src="'+src+'">');
        
        link.click(()=>{
            this.tabsContainer.children(".tabcontent").hide();
            content.show();
        });
        this.linkDiv.append(link);
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

        
        if(this.options.stealth)this.setupMoseOver();
        U.dragElement(this.container,this.header);


        this.container.css("opacity",this.options.opacity);
        this.body.css("width",this.options.width);
        this.body.css("height",this.options.height);
    }

    private createBody(){
        this.container = $('<div id="smash_div"></div>');
        this.container.append(this.header = $('<div id="smash_divheader">OliSmash !!!</div>'));
        this.container.append(this.linkDiv = $('<div id="smash_linkDiv"></div>'));
        this.container.append(this.body =$('<div id="smash_tabcontainer"></div>'));
        
        
        //src="https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html"
        //this.container.append(this.body =$('<iframe id="smash_div_textarea" class="tabcontent" src="file:///C:/Users/zezul/Dropbox/MOje/Projects/OliSmash/build/chat-iframe.html">'));
        $("body").append(this.container);
    }

    private addTabs(tabs?:TabEntity[]){
        this.tabManager.addIframeTab("CHAT","https://cdn.jsdelivr.net/gh/Zezis/OliSmash@test/build/chat-iframe.html");

        if(tabs){
            tabs.forEach(t=>{
                this.tabManager.addIframeTab(t.name,t.src);
            });
        }
    }

    private setupMoseOver(){
        this.container.mouseover(()=>{
            this.body.css("visibility","visible");
            this.header.css("visibility","visible");
            this.linkDiv.css("visibility","visible");
        });

        this.container.mouseout(()=>{
            this.body.css("visibility","hidden");
            this.header.css("visibility","hidden");
            this.linkDiv.css("visibility","hidden");
        });

    }


    
    

}








/* 
// Container
var container = doc.createElement("div");
container.setAttribute("id", "smash_div");

// Header
var header = doc.createElement("div");
header.setAttribute("id", "smash_divheader");
header.innerHTML="OliSmash !!!";
container.appendChild(header);	




// Iframe
var txtarea = doc.createElement("iframe");
txtarea.setAttribute("id", "smash_div_textarea");
txtarea.setAttribute("class", "tabcontent");
txtarea.setAttribute("src", "https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html");
container.appendChild(txtarea); */