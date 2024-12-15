class SocialComponent extends HTMLElement {

    //Constructor principal del componente
    constructor() {

        //declaramos al metodo super de la clase padre
        super();

        //Encapsulación del dom
        this.shadow = this.attachShadow({ mode: 'open' });

        //div para el componente social-componente
        this.socialContainer = document.createElement('div');
        this.socialContainer.classList.add('social-container');

        //div para los estilos
        this.styleSocial = document.createElement('style');
        this.styleSocial.textContent = `
        .social-container {            
            display: flex; 
            flex-direction: column;
            margin-top: 3%; /* Justo después del menu */
            align-items: center;
            padding: 30px 20px; /* Ejemplo de padding válido */        
            border-radius: 10px;
            text-align: center;
            background-color:#ffffff;            
        }
        .social-perfil {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-top: 100px;     
            margin-right: 20px;    
            margin-bottom: 10px; 
        }
        .username {        
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 5px;  
            display: flex;     
        }
        .biogSocial {
            font-style: italic;
            color: #555;
            display: block;        
        }               
    `;
        //Agrega nodos nuevos a los nodos existentes
        this.shadowRoot.appendChild(this.socialContainer);
        this.shadowRoot.appendChild(this.styleSocial);
    }

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback(){
        this.render();
    }

    //El render() define qué se debe mostrar en el navegador.
    render = ()=>{
        this.socialContainer.innerHTML = "";
        
        const socialPerfil = this.getAttribute("social-perfil")||'URL IMAGE';
        const username = this.getAttribute('username')||'Usuario Desconocido';
        const biogSocial = this.getAttribute('biogSocial')||'Ponga una Bibliografía';
        
        const imgElement = document.createElement('img');
        imgElement.src = socialPerfil;
        imgElement.alt = 'Foto de Usuario';
        imgElement.classList.add('social-perfil');

        const usernameElement = document.createElement('div');
        usernameElement.classList.add('username');
        usernameElement.textContent = username;

        const biogSocialElement = document.createElement('div');
        biogSocialElement.classList.add('biogSocial');
        biogSocialElement.textContent = biogSocial;

        this.socialContainer.appendChild(imgElement);
        this.socialContainer.appendChild(usernameElement);
        this.socialContainer.appendChild(biogSocialElement);
    }
}
//instanciamos el conponente social-component
window.customElements.define('social-componente', SocialComponent);
