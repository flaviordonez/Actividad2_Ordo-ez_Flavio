# Actividad2_Ordo-ez_Flavio
Act2 pic 202451

Estudiante: Flavio Mauricio Ordoñez Montero  
I.D.: L00392006  
NRC: 1405  
Tutor: Angel Cudco

Componentes WEB 15/12/2024

FUNCIONAMIENTO DE LOS COMPONENTES WEB
1. Componente header 
   nombre: header-component
   js: header-component.js
   Este componente contiene un titulo Componentes Web 202451 y está ubicado fijamente en margin top de la página, se muestra en todas las páginas disponibles.
   
2. Componente menu
     nombre: menu-component
     js: menu-component.js
     Este componete contiene el menú de opciones de la página, se encuentra justo debajo del header, está fijo y se encuentra en todas las páginas y sus opciones navegan correctamente.
     Páginas disponibles desde el menú: Inicio, Gallery, Red Social, TableJson.
   
3. Componente main
     nombre: main-component
     js: main-component.js
     Este componetes está en la página de principal INDEX y muestra una imagen de portada  y un SLOT con el mensaje de bienvenido a su APP se encuentra entre el menú y el footer .
   
4. Componente socialProfile
     nombre: social-componente
     js: social-componente.js
     Este componete muestra la página Red Social, su html es componente-social.html, la misma que tiene una imagen de perfil, con el nombre de Usuario y una pequeña descripción, se ubica entre el manú y el footer
   
5. Componente customTable
   nombre: table-component
   js: table-component.js
   Al componente se accede desde el menú opción TableJson y su html table-component.html es el , consumiendo los datos de la api publica https://jsonplaceholder.typicode.com/users,
   se ecuentra con sus encabezados y los datos disponible de la api, se encuentra entre el menú y ell footer.
    
6. Componente gallery
   nombre: gallery-component
   js: gallery-component.js
   Este componete devuelve imagenes de los pokemon de la api https://pokeapi.co/ está configurada para que se visualisen 100 imagenes,
   se encuentra entre los componentes del menú y el footer, es accesible desde el menú opción Gallery, su html es gallery-component.html.
   
11. Footer
    nombre: footer-component
    js: footer-component.js
    Está situado al final de la página, se encuentra fijo, contiene información de copyright.

    Esta aplicación es parte de la actividad 2 de Programación de Componentes WEb.   



