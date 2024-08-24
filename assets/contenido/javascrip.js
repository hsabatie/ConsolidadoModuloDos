const img = document.getElementById('imagenCambia');

img.addEventListener('mouseover', function() {
    img.style.transition = 'transform 1s ease';
    img.style.transform = 'scale(1.05)'
    img.src = '../imagenes/solo leveling 3.webp'; // Cambia a la imagen cuando el ratón pasa por encima
});

img.addEventListener('mouseout', function() {
    img.style.transform = 'scale(1)'; // Vuelve al tamaño original
    img.style.transition = 'transform 1s ease'; // Asegura que la transición se aplique
    img.src = '../imagenes/inicios.png'; // Vuelve a la imagen original cuando el ratón sale
    
});