// scripts.js
window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerForm = document.getElementById('preMatriculaForm');

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
    });

    registerForm.addEventListener('submit', function(event){
        event.preventDefault();
        
        const nombre_completo_nino  = document.getElementById('nombre_completo_nino').value;
        const fecha_nacimiento  = document.getElementById('fecha_nacimiento').value;
        const genero  = document.getElementById('genero').value;
        const lugar_nacimiento  = document.getElementById('lugar_nacimiento').value;
        const numero_identificacion  = document.getElementById('numero_identificacion').value;
        const experiencia_previa  = document.getElementById('experiencia_previa').value;
        const expectativas_padres  = document.getElementById('expectativas_padres').value;
        const nombre_padre  = document.getElementById('nombre_padre').value;
        const ocupacion_padre  = document.getElementById('ocupacion_padre').value;
        const lugar_trabajo_padre  = document.getElementById('lugar_trabajo_padre').value;
        const telefono_trabajo_padre  = document.getElementById('telefono_trabajo_padre').value;
        const nombre_madre  = document.getElementById('nombre_madre').value;
        const ocupacion_madre  = document.getElementById('ocupacion_madre').value;
        const lugar_trabajo_madre  = document.getElementById('lugar_trabajo_madre').value;
        const telefono_trabajo_madre  = document.getElementById('telefono_trabajo_madre').value;
        const direccion_completa  = document.getElementById('direccion_completa').value;
        const telefono_emergencia  = document.getElementById('telefono_emergencia').value;
        const correo_electronico  = document.getElementById('correo_electronico').value;
        const estado_civil_padres  = document.getElementById('estado_civil_padres').value;
        const personas_autorizadas  = document.getElementById('personas_autorizadas').value;
        const documento_personas_autorizadas  = document.getElementById('documento_personas_autorizadas').value;
        const consentimiento_medico  = document.getElementById('consentimiento_medico').value;
        const alergias  = document.getElementById('alergias').value;
        const condiciones_medicas  = document.getElementById('condiciones_medicas').value;
        const vacunas_al_dia  = document.getElementById('vacunas_al_dia').value;
        const medicamentos  = document.getElementById('medicamentos').value;
        const seguro_medico  = document.getElementById('seguro_medico').value;
        const rh_nino  = document.getElementById('rh_nino').value;
        const preferencias_alimenticias  = document.getElementById('preferencias_alimenticias').value;
        const habitos_sueno  = document.getElementById('habitos_sueno').value;
        const necesidades_especiales  = document.getElementById('necesidades_especiales').value;
        const intereses  = document.getElementById('intereses').value;
        const socializacion  = document.getElementById('socializacion').value;
        const metodos_disciplina  = document.getElementById('metodos_disciplina').value;
        const autorizacion_salidas  = document.getElementById('autorizacion_salidas').value;
        const autorizacion_fotos_videos  = document.getElementById('autorizacion_fotos_videos').value;
        const autorizacion_actividades  = document.getElementById('autorizacion_actividades').value;




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
