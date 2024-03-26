const form = document.getElementById("my-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la recarga de la página

    // Obtenemos los valores de los campos
    const name = form.elements.nombre.value;
    const lastname = form.elements.apellido.value;
    const age = form.elements.edad.value;
    const phone = form.elements.telefono.value;
    const email = form.elements.mail.value;

    // Creamos el mensaje con la información
    const message = `Nombre: ${name}\nApellido: ${lastname}\nEdad: ${age}\nTeléfono: ${phone}\nCorreo Electrónico: ${email}`;

    // Mostramos el mensaje en una ventana emergente
    alert(message);
});