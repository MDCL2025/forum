// Función para manejar el envío del formulario
document.getElementById("forum-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    const imageFile = document.getElementById("image").files[0];

    // Crear un nuevo elemento de publicación
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Agregar el nombre de usuario
    const usernameElement = document.createElement("div");
    usernameElement.classList.add("username");
    usernameElement.textContent = username;
    postElement.appendChild(usernameElement);

    // Agregar el mensaje
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    postElement.appendChild(messageElement);

    // Agregar la imagen si se subió una
    if (imageFile) {
        const imageElement = document.createElement("img");
        imageElement.classList.add("image");
        imageElement.src = URL.createObjectURL(imageFile);
        postElement.appendChild(imageElement);
    }

    // Agregar la publicación al contenedor de publicaciones
    document.getElementById("posts-container").prepend(postElement);

    // Limpiar el formulario
    document.getElementById("forum-form").reset();
});
