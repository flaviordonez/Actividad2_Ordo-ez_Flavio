class Gallery extends HTMLElement {
    constructor() {
        super();

        //Encapsulación del dom
        this.attachShadow({ mode: 'open' });

        //Contenedor general de la galería
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.classList.add('gallery-container');

        //Contenedor para los slots
        this.slotContainer = document.createElement('div');
        this.slotContainer.classList.add('slot-container');
        
        //declaramos los estilos
        this.styleContainer = document.createElement('style');
        this.styleContainer.textContent = `
        .gallery-container {
            display: inline-block;
            background-color:rgba(172, 17, 255, 0.1);: 
            flex-wrap: wrap;
            gap: 10px;           
            padding-top: 10px;
            padding-bottom: 20px;
            width: 100%;
            display:grid;
            grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
        }

        .gallery img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          padding: 10px;
          margin-left: 50px; 
        }
        
        h3 {
          padding: 10px;
          margin-left: 50px; 
        } 
        
        .slot-container{
            width: 100%;
            display: block;
            margin-top: 2%;                
            text-align: center;
            background-color:white;
            color:blue;
            padding-top:80px; 
            padding-bottom:0; 
        }
        `;
        //Le asignamos los valore al contenedor
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="gallery">
                <h3></h3>   
                <img src="" alt="Avathar Pokemon">
        `;
        
        //Rellenamos los container
        this.shadowRoot.appendChild(this.styleContainer);
        this.shadowRoot.appendChild(this.slotContainer);
        this.shadowRoot.appendChild(this.galleryContainer);

        //slot
        const slot = document.createElement('slot');
        this.slotContainer.appendChild(slot);
    }

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback() {
        const urlApi = this.getAttribute('endpoint');
        this.fetchData(urlApi);        
    }

    //metodo para hacer solicitudes de red y obtener datos de un servidor
    fetchData = async(url) =>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            const results = data.results || [];
            this.render(results);

        } catch (error) {
            console.error('Error en el fetch',error);
            this.galleryContainer.innerHTML = `<p class="message-error">Error al cargar la galería </p>`;
        }
    }
    //El render() define qué se debe mostrar en el navegador.
    render = async (results) => {
        this.galleryContainer.innerHTML = "";

        results.forEach(async (result) => {
            // Hacemos una nueva solicitud para obtener los detalles de cada Pokémon
            const pokemonResponse = await fetch(result.url);
            const pokemonData = await pokemonResponse.json();

            // Clonamos el template para cada Pokémon
            const avatarElement = this.template.content.cloneNode(true);
            const imagen = avatarElement.querySelector('img');
            const name = avatarElement.querySelector('h3');

            // Asignamos la imagen y el nombre del Pokémon
            imagen.src = pokemonData.sprites.front_default;  // Asignamos la imagen del Pokémon
            imagen.alt = `Avatar de ${pokemonData.name}`;
            name.textContent = pokemonData.name;  // Asignamos el nombre del Pokémon

            // Añadimos el avatar a la galería
            this.galleryContainer.appendChild(avatarElement);
        });
    }
    
}
//instanciamos el componente
customElements.define('gallery-component', Gallery); 
