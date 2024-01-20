function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; // Corrected typo here
    for (const prop in reactElement.props) {
      if (prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
  }
  
const reactElement={
    type:'a',
    props:{
        href:"https://web.whatsapp.com/",
        href:"https://www.google.com/",
        target:'blank'
    },

    children:"click me to use whatsapp"
    
}
const maincontainer=document.querySelector('#root')
customRender(reactElement,maincontainer)