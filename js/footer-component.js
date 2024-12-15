// footer.js
class Footer extends HTMLElement {
    constructor() {

      //Metodo principal de la clase HTML
      super();

      //Encapsulación del dom
      this.attachShadow({ mode: 'open' });

      //div principal de la footer y sus estilo
      this.footerContainer = document.createElement('div');
      this.footerContainer.classList.add('footer-container');

      //Declaramos los estilos a las diferentes etiquetas
      this.footerStyle = document.createElement('style');
      this.footerStyle.textContent = `
          .footer-container {
            text-align: center;
            padding: 15px;
            background-color: #333333;
            color: white;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 7%;
            font-size: 1rem;
            box-sizing: border-box;
          }
          .footer-container p {
            margin: 0;
            padding: 0;
            font-size: 1.1rem;
            font-weight: 500;
            color: #f0f0f0;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Sombra para el texto */
            letter-spacing: 0.5px;
            transition: color 0.3s ease, transform 0.3s ease;
      }
            
      `;

      //Llenamos los containers
      this.shadowRoot.appendChild(this.footerContainer);
      this.shadowRoot.appendChild(this.footerStyle);
    }

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback(){ 
      this.render();
    }
    
    //Se crean las instrucciones para eel metodo connectedCalback
    render = ()=>{
      this.footerContainer.innerHTML = "";//limpia el componente
                
      const p = document.createElement('p');
              
      p.innerHTML = '&copy; Universidad de la Fuerzas Armadas 2024';

      this.footerContainer.appendChild(p)
    }        
}
//instanciamos el componente     
window.customElements.define('footer-component', Footer);
      