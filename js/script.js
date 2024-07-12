
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario vacio

        var email = document.getElementById('CorreoElectronico').value;
        var password = document.getElementById('Contraseña').value;

        if (email === 'cac_admin@gmail.com' && password === 'Codo_A_Codo') {
            alert('Acceso permitido');
        } else {
            alert('Usuario o contraseña incorrecta');
        }
    });
});

/*Api recomendadas*/
function mostrarPeliculas() {
    fetch('http://localhost:8080/apimovies/peliculas')          //peticion al endpoint del a basae de datos creada
        .then(response => response.json())                      //la respuesta sera transformada en formato json
        .then(data => {
            const tbody = document.querySelector("#tableMovies tbody");
            tbody.innerHTML = '';                               // esto limpia el contenido actual

            data.forEach(peli => {                               //entra en un bucle
                const tr = document.createElement("tr");         //crea una fila y la guarda en una constante

                const tdTitle = document.createElement("td");    //crea una celda data y la guarda en una constante
                tdTitle.textContent = peli.titulo;               //accede a la funcion que permite ingresar un texto, ingresa el valor de la clave titulo del json
                tr.appendChild(tdTitle);                         //inserta el texto alojado en la constante dentro de la fila

                const tdGenre = document.createElement("td");    //crea una celda data y la guarda en una constante  
                tdGenre.textContent = peli.genero;               //accede a la funcion que permite ingresar un texto, ingresa el valor de la clave genero del json
                tr.appendChild(tdGenre);                         //inserta el texto alojado en la constante dentro de la fila

                const tdDuration = document.createElement("td");
                tdDuration.textContent = peli.duracion;
                tr.appendChild(tdDuration);

                const tdImage = document.createElement("td");    //crea una celda data y la guarda en una constante
                const img = document.createElement("img");       //crea una imagen (html) y la guarda en una constante
                img.src = peli.imagen;                           //toma el valor otorgado por la respuesta. El valor es de la llave imagen del json. Debe ser una url
                img.alt = peli.titulo;                           //toma el valor de la llave titulo y la agrega al atributo alt de la etiqueta html
                img.width = 100;                                 //configura el tamaño de la imagen
                tdImage.appendChild(img);                        //agrega dentro de la celda la etiqueta imagen creada
                tr.appendChild(tdImage);                         //agrega dentro de la fila la celda creada

                tbody.appendChild(tr);                           //agrega la fila dentro del cuerpo de la tabla (la cabezera es fija por html)
            });
        })
        .catch(error => console.error('Error:', error));
}

function agregarPelicula(event) {
    event.preventDefault();         //Evita que el formulario se envie vacio

    let titulo = document.getElementById('titulo').value;
    let genero = document.getElementById('genero').value;
    let duracion = document.getElementById('duracion').value;
    let imagen = document.getElementById('imagen').value;

    let peli = {                    //se crea un objeto js 
        titulo: titulo,
        genero: genero,
        duracion: duracion,
        imagen: imagen
    };

    fetch('http://localhost:8080/apimovies/peliculas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(peli)      //convierto el objeto peli en una cadena del tipo json
    })
    .then(response => response.json())  //muestro por consola un mensaje bandera con la respuesta en formato json.
    .then(data => {
        console.log('Success:', data);
        mostrarPeliculas();
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarPeliculas();
});

