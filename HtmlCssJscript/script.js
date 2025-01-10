// Archivo JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Añade un mensaje de confirmación al enviar el formulario
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario

        // Muestra un mensaje de confirmación
        alert('Gracias por tus preguntas y comentarios, pronto me pondre en contacto.');

        //reinicia el formulario
        contactForm.reset();
    });
});
