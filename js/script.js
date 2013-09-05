var Sniffer = (function (){
    var instance = {};
    var elementAttr = document.querySelector('.target-info');

    function removeChildren(node) {
        var children = node.childNodes;

        while(children.length) {
            node.removeChild(children[0])
        }
    }

    instance.showElementAttr = function (e) {
        var target = e.target || event.srcElement;
        var relatedTarget = e.relatedTarget || e.fromElement;

        removeChildren(elementAttr);

        if (relatedTarget){
            relatedTarget.style.background="";
            relatedTarget.style.border="";
        }
        target.style.background="#FFFF00";
        target.style.border="1px solid #FF0000";

        for (var key in target.attributes){
            var item = document.createElement('div');
            item.innerHTML = "<b>Attr:</b> " + key + " <b>value:</b>" + target.attributes[key];
            elementAttr.appendChild(item);
        }
        return false;
    };

    Sniffer = function() {
        return instance;
    };

    window.addEventListener('mouseover', instance.showElementAttr, false);
})();


