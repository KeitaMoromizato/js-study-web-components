const XElementPrototype = Object.create(HTMLElement.prototype);
const XElement = document.registerElement('x-element', {
  prototype: XElementPrototype
});

const xElement = new XElement();
xElement.textContent = 'これはXElementです';
document.body.appendChild(xElement);
