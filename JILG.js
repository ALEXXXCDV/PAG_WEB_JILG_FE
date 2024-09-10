// scripts.js
window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', async function(event){
        event.preventDefault();
        
        const username  = document.getElementById('username').value;
        const password  = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username": username, "password": password}),
            });

            const data = await response.json();
            console.log(data);

            if(response.ok){
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'turquoise';
            }else{
                loginMessage.textContent = data.message || 'Error en el Login';
                loginMessage.style.color = 'orange';
            }
        } catch (error) {
            console.log(error)
            loginMessage.textContent = 'Error en el Login';
            loginMessage.style.color = 'grey'
        }
    })
}

/*
document.getElementById('preMatriculaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la conexión con la base de datos Postgres usando un API
    const formData = {
        nombre: document.getElementById('nombre').value,
        fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
        nombre_padres: document.getElementById('nombre_padres').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        comentarios: document.getElementById('comentarios').value
    };

    console.log('Formulario enviado', formData);

    // Aquí podrías hacer una llamada a una API o backend para enviar los datos a la base de datos
    alert('Formulario enviado exitosamente.');
});*/
