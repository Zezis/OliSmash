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
	};

	container.onmouseout = function(){
		txtarea.style.visibility = "hidden";
		header.style.visibility = "hidden";
	};	
}

function smasher_init(stealth){
	if(stealth==true) moseOverShow(container);
}

var doc = document;

// Container
var container = doc.createElement("div");
container.setAttribute("id", "smash_div");

// Header
var header = doc.createElement("div");
header.setAttribute("id", "smash_divheader");
header.innerHTML="Oliva Smash !!!";
container.appendChild(header);	

// Textarea
/*var txtarea = doc.createElement("textarea");
txtarea.setAttribute("id", "smash_div_textarea");
txtarea.setAttribute("rows", "5");
txtarea.setAttribute("cols", "60");
container.appendChild(txtarea);*/

// Iframe
var txtarea = doc.createElement("iframe");
txtarea.setAttribute("id", "smash_div_textarea");
txtarea.setAttribute("src", "https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html");
container.appendChild(txtarea);


// Testing purpose
//txtarea.innerHTML="Text fd sada sdas asdd asd asd s das das dasd fgdfg dgdsf gsdf fdg dsg dfsg dsfg sdf gdsf g";


doc.body.appendChild(container);
dragElement(document.getElementById(("smash_div")));


