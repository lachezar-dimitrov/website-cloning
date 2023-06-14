export function getElementById(elementID) {
  return document.getElementById(elementID);
}
export function addClass(className, element) {
  element.classList.add(className);
}
export function appendChild(parentElement, childElement) {
  parentElement.appendChild(childElement);
}
export function setAttribute(element, attributeKey, attributeValue) {
  element.setAttribute(attributeKey, attributeValue);
}
export function textContent(element, textChange) {
  element.textContent = textChange;
}
export function createElement(elementType) {
  return document.createElement(elementType);
}
export function setSource(element, sourcePath) {
  element.src = sourcePath;
}
export function addEventListener(element, type, listener) {
  element.addEventListener(type, listener);
}
