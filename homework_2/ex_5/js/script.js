const counts = {};

function countElementsByLevel(srcDOMElement, childElementName) {
  let parent = document.getElementsByTagName(srcDOMElement);
  let child = parent[0].getElementsByTagName(childElementName).length;
  counts[child] = child;

  return counts;
}

console.log(countElementsByLevel("div", "h1"));
