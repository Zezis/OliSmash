/* 
function setupDrag(elmnt:JQuery){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    elmnt.mousedown(()=>{dragMouseDown(elmnt)});

	function dragMouseDown(e:JQuery) {
		e = e || window.event;
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	// function elementDrag(e) {
	// 	e = e || window.event;
	// 	pos1 = pos3 - e.clientX;
	// 	pos2 = pos4 - e.clientY;
	// 	pos3 = e.clientX;
	// 	pos4 = e.clientY;
	// 	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	// 	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	// }

	// function closeDragElement() {
	// 	document.onmouseup = null;
	// 	document.onmousemove = null;
	// }
}
 */



var container:JQuery = $('<div id="smash_div"></div>');
container.append($('<div id="smash_divheader">OliSmash !!!</div>'));
container.append($('<iframe id="smash_div_textarea" class="tabcontent" src="https://bb.githack.com/zezis/olivasmash/raw/Testing/chat-iframe.html">'));






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