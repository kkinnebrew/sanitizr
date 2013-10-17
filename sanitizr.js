(function() {

  // Replace all text numbers.
  var walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  function replaceFn() {
    return ~~(Math.random() * 10);
  }

  while(node = walker.nextNode()) {
    if (node.nodeValue != null && node.nodeValue.match(/\d/)) {
      node.nodeValue = node.nodeValue.replace(/\d/g, replaceFn);
    }
  }

  // Replace all input values.
  var nodeList = document.getElementsByTagName('input'), value;
  for (var i = 0; i < nodeList.length; ++i) {
    var node = nodeList[i];
    if ((node.getAttribute('type') === 'number' || node.getAttribute('type') === 'text') && node.value != null && node.value.match(/\d/)) {
      node.value = node.value.replace(/\d/g, replaceFn);
    }
  }

  // Enable contenteditable for all elements.
  var nodeList = document.getElementsByTagName('*');
  for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].setAttribute('contenteditable','true');
  }

})();
