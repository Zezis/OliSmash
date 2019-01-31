function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function moseOverShow(){
	container.onmouseover = function(){
		txtarea.style.visibility = "visible";
		header.style.visibility = "visible";
		///tabbarHTML.style.visibility = "visible";
	};

	container.onmouseout = function(){
		txtarea.style.visibility = "hidden";
		header.style.visibility = "hidden";
		//tabbarHTML.style.visibility = "hidden";
	};	
}

function smasher_init(stealth, opacity, width, height){
	if(stealth==true) moseOverShow(container);
	document.getElementById(("smash_div")).style.opacity=opacity;
	document.getElementById(("smash_div_textarea")).style.width=width;
	document.getElementById(("smash_div_textarea")).style.height=height;
	
	document.getElementById("defaultOpen").click();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var doc = document;

// Container
var container = doc.createElement("div");
container.setAttribute("id", "smash_div");

// Header
var header = doc.createElement("div");
header.setAttribute("id", "smash_divheader");
header.innerHTML="OliSmash !!!";
container.appendChild(header);	


// TAB bar
var tabbarHTML = 
'<div id="smash_div_tabbar" class="tab"> \
	<button class="tablinks" id="defaultOpen" onclick="openTab(event, \'London\')">London</button> \
	<button class="tablinks" onclick="openTab(event, \'smash_div_textarea\')">smash_div_textarea</button> \
	<button class="tablinks" onclick="openTab(event, \'Tokyo\')">Tokyo</button> \
</div>';

container.innerHTML = container.innerHTML+ tabbarHTML;



// Textarea
/*var txtarea = doc.createElement("textarea");
txtarea.setAttribute("id", "smash_div_textarea");
txtarea.setAttribute("rows", "5");
txtarea.setAttribute("cols", "60");
container.appendChild(txtarea);*/

// Iframe
var txtarea = doc.createElement("iframe");
txtarea.setAttribute("id", "smash_div_textarea");
txtarea.setAttribute("class", "tabcontent");
txtarea.setAttribute("src", "https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html");
container.appendChild(txtarea);


// Testing purpose
//txtarea.innerHTML="Text fd sada sdas asdd asd asd s das das dasd fgdfg dgdsf gsdf fdg dsg dfsg dsfg sdf gdsf g";


doc.body.appendChild(container);
dragElement(document.getElementById(("smash_div")));


