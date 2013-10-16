(function() {
 
    // Replace all text numbers.
    var walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
 
    while(node = walker.nextNode()) {
        if (node.nodeValue != null && node.nodeValue.match(/\d/g)) {
            var len = node.nodeValue.length;
            for (var i = 0; i < len; ++i)
            {
                var c = node.nodeValue.charAt(i);
                if (c.match(/\d/g)) {
                    node.nodeValue = node.nodeValue.replace(c, ~~(Math.random() * 10));
                }
            }
        }
    }
    
    // Replace all input values.
    var nodeList = document.getElementsByTagName('input');
    for (var i = 0; i < nodeList.length; ++i) {
        var node = nodeList[i];
        if (node.getAttribute('type') === 'text' && node.value != null && node.value.match(/\d/g)) {
            var len = node.value.length;
            for (var j = 0; j < len; ++j)
            {
                var c = node.value.charAt(j);
                if (c.match(/\d/g)) {
                    node.value = node.value.replace(c, ~~(Math.random() * 10));
                }
            }
        }
    }
    
    // Enable contenteditable for all elements.
    var nodeList = document.getElementsByTagName('*');
    for (var i = 0; i < nodeList.length; ++i) {
        nodeList[i].setAttribute('contenteditable','true');
    }
    
})();
