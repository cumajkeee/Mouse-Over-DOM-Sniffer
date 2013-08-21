var target;
var elementAttr = document.querySelector('.target-info');
var body = document.getElementsByTagName('body')[0];
var highlighted = document.querySelector('.highlighted');

function removeChildren(node) {
    var children = node.childNodes;

    while(children.length) {
        node.removeChild(children[0])
    }
}


function showElementAttr(e) {
    var target = e.target || event.srcElement;
    var relatedTarget = e.relatedTarget || e.fromElement;

    removeChildren(elementAttr);

    if (relatedTarget){
        relatedTarget.style.background="";
        relatedTarget.style.border="";
    }
    target.style.background="#FFFF00";
    target.style.border="1px solid #FF0000";

    for (var key in target){
        var item = document.createElement('div');
        item.innerHTML = "<b>Attr:</b> " + key + " <b>value:</b>" + target[key];
        elementAttr.appendChild(item.cloneNode(true))
    }
    return false;
}

body.addEventListener('mouseover', showElementAttr, false);