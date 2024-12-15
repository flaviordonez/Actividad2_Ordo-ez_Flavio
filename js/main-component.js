// main.js
class Main extends HTMLElement {
  constructor() {

    //Llama a su clase padre de la clase HTMLElement
    super();

    //Encapsulación del dom
    this.shadow = this.attachShadow({ mode: 'open' });

    //creamos el contaienr principal del main
    this.mainContainer = document.createElement('div');
    this.mainContainer.classList.add('main-container');

    //Contenedor para los slots
    this.slotMain = document.createElement('div');
    this.slotMain.classList.add('slot-main');

    //creamos el documento de estilos
    this.styleMain = document.createElement('style');
    this.styleMain.textContent = `
    .main-container {        
        flex-direction: column;
        margin-top: 3%; /* Justo después del menu */
        align-items: center;
        padding: 30px 20px; /* Ejemplo de padding válido */        
        border-radius: 10px;
        text-align: center;
        display: block;
        
    }
    .main-picture {
        width: 50%;
        height: 80%;            
        margin-right: 20px;    
        margin-bottom: 10px; 
        position: absolute;
        right: 0;
        top:100px;
        bottom: 130px;
    }

    .slot-main{
        width: 100%;
        display: flex;
        margin-top: 10%;                
        text-align: center;
        background-color:white;
        color:blue;
        padding: 80px 25px;
        font-size: 25px; 
    }
        .slot-main:hover{
            font-size: 40px;
        }        
    `;
    //Agrega nodos nuevos a los nodos existentes
    this.shadowRoot.appendChild(this.mainContainer);
    this.shadowRoot.appendChild(this.styleMain);
    this.shadowRoot.appendChild(this.slotMain);

    const slot = document.createElement('slot');
    this.slotMain.appendChild(slot);
    }

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback(){
        this.render();
    }

    //El render() define qué se debe mostrar en el navegador.
    render = ()=>{
        this.mainContainer.innerHTML = "";
        
        const picture = this.getAttribute("picture")||'URL IMAGE';
        
        
        const imgElement = document.createElement('img');
        imgElement.src = picture;
        imgElement.alt = 'Imagen de Portada';
        imgElement.classList.add('main-picture');

        
        this.mainContainer.appendChild(imgElement);
        
    }
 }
//Instanciamos el componente main-component
 customElements.define('main-component', Main);
  