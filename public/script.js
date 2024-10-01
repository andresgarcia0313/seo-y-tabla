document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('response').innerText = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
    this.reset();
});
