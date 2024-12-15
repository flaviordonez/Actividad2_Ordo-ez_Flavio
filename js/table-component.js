class TableComponent extends HTMLElement {

    //Constructor principal del componente
    constructor() {

      //metodode la clase padre htmlElement
      super();

      //Encapsulación del dom
      this.attachShadow({ mode: 'open' });

      ///div principal de la tabla y sus estilos
      this.tableContainer = document.createElement('div');
      this.tableContainer.classList.add('tabla-container');
     
      //Estilos para las diferentes etiquetas
      this.styleContainer = document.createElement('style');
      this.styleContainer.textContent= `         
          .table-container{
            position: relative;
            display: inline-block;
            flex-wrap: wrap;
            gap: 10px;             
            padding: 10px;
            width: 100%;
          }
          table { 
            margin-top: 8%;       
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;            
          }
          th {
            background-color: #138d75 ;
            text-align: center;
          }
      `;

      //Agrega nodos nuevos a los nodos existentes
      this.shadowRoot.appendChild(this.styleContainer);
      this.shadowRoot.appendChild(this.tableContainer);      
    }
    
    //El render() define qué se debe mostrar en el navegador.
    render = (data)=>{
      this.tableContainer.innerHTML = "";//limpia el componente

    // Crear el contenedor de la tabla
    const table = document.createElement('table');

    // Crear encabezados de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Nombre','Usuario', 'Correo Electrónico', 'Ciudad','Dirección','Geolocalización','Teléfono','Sitio Web', 'Compañía']; // Campos a mostrar

    //Recorre en busca de th
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    //Rellena el encabezado de la tabla
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla con los datos
    const tbody = document.createElement('tbody');
    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.address.street}, ${user.address.suite}, C.P.: ${user.address.zipcode}</td>
        <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
      `;
      tbody.appendChild(row);
    });

    //rellena la tabla
    table.appendChild(tbody);
    this.tableContainer.appendChild(table);

    }

    //metodo para hacer solicitudes de red y obtener datos de un servidor
    fetchData = async(url) =>{
      try {
          const response = await fetch(url);
          const data = await response.json();
          
          //Llamamos a render para mostrar los datos
          this.render(data);

      } catch (error) {
          console.error('Error en el fetch',error);
          this.tableContainer.innerHTML = `<p class="message-error">Error al cargar la tabla </p>`;
      }
    };

    //Metodo principal que se ejecuta cuando agragamos elementos al DOM
    connectedCallback() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL de la API
      this.fetchData(apiUrl); // Llamamos a fetchData para obtener los datos
    }
}

//instancio el componente table-component
customElements.define('table-component', TableComponent);
