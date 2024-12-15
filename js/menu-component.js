class Menu extends HTMLElement{

    //Declaro el constructor que me permitira construir mis componentes
    constructor(){
        
        //declaramos al metodo super de la clase padre
        super();
        
        //Encapsulación del dom
        this.shadow = this.attachShadow({mode:'open'});//llamamos al metodo attachShadow()
        
        //Voy a crear un container para el menu de la aplicación
        this.menuContainer = document.createElement('div');
        this.menuContainer.classList.add("menu-container");//nombre de clase a nuestro container menuContainer =>menu-container
                
        //Estilos del footer
        this.estiloMenu = document.createElement("style");
        this.estiloMenu.textContent =`
        .menu-container {
            display: flex;
            top: 5%;
            width: 100%;                          
            background-color: #708090;
            border-radius: 2px;
            position: fixed;            
            left: 0;
            z-index: 90;
            height: 7.5%;
            overflow: hidden;
        }
        ul {
            padding: 0;
            margin: 0;
        }
        li {
            list-style: none;
            margin: 0;
            padding: 20px;
             
        }
        li a {
            text-decoration: none;
            color: white;
            display: inline;
            padding: 20px;
            text-align: center;
            font-weight:bold; 
            font-size: 20px;
        }
        li a:hover {
            color: #C0C0C0;
        }
        `;

        //Agrega nodos nuevos a los nodos existentes
        this.shadowRoot.appendChild(this.menuContainer);
        this.shadowRoot.appendChild(this.estiloMenu);
    }  

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback(){ 
        this.render();
    }

    //El render() define qué se debe mostrar en el navegador.
    render = ()=>{
        this.menuContainer.innerHTML = "";//limpia el componente

        const opcionesMenu = [
            {texto:'Inicio',enlace:'index.html'},            
            {texto:'Gallery',enlace:'gallery-component.html'},            
            {texto:'Red Social',enlace:'componente-social.html'},                     
            {texto:'TablaJson',enlace:'table-component.html'},                     
        ];
        //..........
        opcionesMenu.forEach(opcion =>{
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = opcion.texto;
            link.href = opcion.enlace;
            listItem.appendChild(link);
            this.menuContainer.appendChild(listItem);

        });         
    }    
}
//instanciación del componente menu-component
window.customElements.define("menu-component",Menu);
