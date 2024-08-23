document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById("myIframe");
    iframe.onload = function() {
        
        // Ajusta la altura del iframe al contenido
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
});