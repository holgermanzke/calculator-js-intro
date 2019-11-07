export function createDivWithContent(content) {
  const divElement = document.createElement("div");
  divElement.innerHTML = content.toString();
  return divElement;
}

export function appendElementToElement(parent, child) {
  // https://www.w3schools.com/jsref/met_node_appendchild.asp
  return parent.appendChild(child);
}
