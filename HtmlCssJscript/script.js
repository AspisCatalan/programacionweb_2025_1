// Archivo JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Añade un mensaje de confirmación al enviar el formulario
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario

        // Muestra un mensaje de confirmación
        alert('Gracias por contactarte conmigo. Responderé lo más pronto posible.');

        //reinicia el formulario
        contactForm.reset();
    });
});
