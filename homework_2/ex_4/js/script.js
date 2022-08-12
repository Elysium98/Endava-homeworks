function countElementsInDocument(document, elementName) {
  return document.getElementsByTagName(elementName).length;
}

console.log(countElementsInDocument(document, "h1"));
console.log(countElementsInDocument(document, "span"));
