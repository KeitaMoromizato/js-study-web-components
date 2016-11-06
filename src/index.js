const XElementPrototype = Object.create(HTMLElement.prototype);

XElementPrototype.createdCallback = function(){

  const template = document.getElementById('x-element-template');
  const clone = document.importNode(template.content, true);
  const shadowRoot = this.createShadowRoot();
  shadowRoot.appendChild(clone);

  this.addEventListener('click', e => {
    alert('Click');
  });
};

XElementPrototype.attachedCallback = () => {
  console.log('attached');
};

XElementPrototype.detachedCallback = () => {
  console.log('detached');
};

XElementPrototype.attributeChangedCallback = (attribute, oldValue, newValue) => {
  console.log('prototype changed', attribute, oldValue, newValue);
};

const XElement = document.registerElement('x-element', {
  prototype: XElementPrototype,
  extends: 'button',
});

const xElement = new XElement();
xElement.textContent = '独自のボタン';
document.body.appendChild(xElement);
