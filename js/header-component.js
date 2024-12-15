// header.js
class Header extends HTMLElement {
    constructor() {
      
      //Llama a su clase padre 
      super();

      //Encapsulación del dom
      this.attachShadow({ mode: 'open' });

      //creamos los container y su clase
      this.headerContainer = document.createElement('div');
      this.headerContainer.classList.add('header-container');
      
      //Agragamos un documento para los estilos
      this.headerStyle = document.createElement('Style')
      this.headerStyle.textContent = `
        .header-container {
          background-color: #4169E1; 
          position: fixed;
          top: 0;
          left: 0;
          width: 100%; 
          height: 5%;
          z-index: 100;
          padding: 5px;
        }
        h1 {
          font-size: 2em;
          color: #333;
          text-align: center;
          margin: 0;
        }     
      `;
      
      //Agrega nodos nuevos a un nodo existente
      this.shadowRoot.appendChild(this.headerContainer);
      this.shadowRoot.appendChild(this.headerStyle);
    }

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback(){
      this.render()
    }

    //El render() define qué se debe mostrar en el navegador.
    render = ()=> {
      this.headerContainer.innerHTML = "";//limpia el componente
                
      const encabezado = document.createElement('h1');
            
      encabezado.innerHTML = 'Componentes Web 202451';

      this.headerContainer.appendChild(encabezado);

    }
}

//Instanciamos el componete header-component
customElements.define('header-component', Header);
  