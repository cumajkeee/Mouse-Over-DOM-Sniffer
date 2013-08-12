var tabik = document.querySelector('.wrapper');
var tabList = tabik.querySelectorAll('.tab-wrapper li');
var currentTab = tabik.querySelector('.active');
var currentContent = tabik.querySelector('.expanded');
var target;
var elementAttr = document.querySelector('.target-info');
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i<tabList.length; i++){
    tabList[i].onclick = function(){
        currentTab.classList.remove('active');
        currentTab = this;
        this.classList.add('active');
        currentContent.classList.remove('expanded');
        target = tabik.querySelector('.content_tab'+this.dataset.tab);
        target.classList.add('expanded');
        currentContent = target;
    };
}
function removeChildren(node) {
    var children = node.childNodes;

    while(children.length) {
        node.removeChild(children[0])
    }
}

function showElementAttr(e) {
    removeChildren(elementAttr);

    var target = e.target || event.srcElement;
    target.style.backgroundColor = 'orange';

    for (var key in target){
        if (target[key] == ""){
            continue;
        } else {
            var item = document.createElement('div');
            item.innerHTML = "<b>Attr:</b> " + key + " <b>value:</b>" + target[key];
            elementAttr.appendChild(item.cloneNode(true))
        }
    }
    return false;
}

tabik.addEventListener('mouseover', showElementAttr, false);