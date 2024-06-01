
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        var email = document.getElementById('CorreoElectronico').value;
        var password = document.getElementById('Contraseña').value;

        if (email === 'cac_admin@gmail.com' && password === 'Codo_A_Codo') {
            alert('Acceso permitido');
        } else {
            alert('Usuario o contraseña incorrecta');
        }
    });
});