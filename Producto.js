      // Hacer la llamada fetch con async/await
      async function getImages() {
        try {
            const response = await fetch('http://sulbaranjc.com:3312/images');
            const images = await response.json();

            // Mostrar las imágenes en tarjetas Bootstrap
            const imagesContainer = document.getElementById('images-container');
            images.forEach(image => {
                const card = `
                <div class="d-flex justify-content-center align-items-center mx-2 pt-5" >
                    <div class="card mb-4" style="width: 420px; height: 800px; ">
                        <img class="card-img-top" src="http://sulbaranjc.com:3312/${image.namefile}" alt="${image.titulo}"/>
                            <div class="card-body d-flex flex-column pt-4 fw-bolder>
                                <h5 class="card-title"><strong>${image.titulo}</strong></h5>
                                <p class="card-text">${image.descripcion}</p>
                                <p class="card-text">Precio: $${image.precio}</p>
                                <p class="card-text">Existencia: ${image.existencia}</p>
                                <div class="card-body d-flex align-items-end">
                                    <button type="button" class="btn btn-outline-primary d-block mx-auto mb-3">♡ LO QUIERO ♡</button>
                                </div> 
                            </div>
                    </div>
                </div>
                `;
                imagesContainer.innerHTML += card;
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Llamar a la función para obtener las imágenes
    getImages();