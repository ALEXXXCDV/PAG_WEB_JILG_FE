// scripts.js
window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerForm = document.getElementById('preMatriculaForm');
    const registerMessage = document.getElementById('registerMessage');


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
                window.location.href = "preMatricula.html";
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

    registerForm.addEventListener('submit', async function(event){
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
            const response = await fetch('http://localhost:3000/create_informacion_nino', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre_completo_nino: nombre_completo_nino, fecha_nacimiento: fecha_nacimiento, genero: genero, lugar_nacimiento: lugar_nacimiento, numero_identificacion: numero_identificacion, experiencia_previa: experiencia_previa, expectativas_padres: expectativas_padres, nombre_padre: nombre_padre,ocupacion_padre: ocupacion_padre, lugar_trabajo_padre: lugar_trabajo_padre,  telefono_trabajo_padre: telefono_trabajo_padre, nombre_madre: nombre_madre, ocupacion_madre: ocupacion_madre, lugar_trabajo_madre: lugar_trabajo_madre, telefono_trabajo_madre: telefono_trabajo_madre,  direccion_completa: direccion_completa, telefono_emergencia: telefono_emergencia, correo_electronico: correo_electronico, estado_civil_padres: estado_civil_padres, personas_autorizadas: personas_autorizadas,documento_personas_autorizadas: documento_personas_autorizadas, consentimiento_medico: consentimiento_medico, alergias: alergias, condiciones_medicas: condiciones_medicas, vacunas_al_dia: vacunas_al_dia,medicamentos: medicamentos, seguro_medico: seguro_medico, rh_nino: rh_nino, preferencias_alimenticias: preferencias_alimenticias, habitos_sueno: habitos_sueno,necesidades_especiales: necesidades_especiales, intereses: intereses, socializacion: socializacion, metodos_disciplina: metodos_disciplina, autorizacion_salidas: autorizacion_salidas,autorizacion_fotos_videos: autorizacion_fotos_videos,autorizacion_actividades: autorizacion_actividades}),
            });

            const data = await response.json();
            console.log(data);

            if(response.ok){
                registerMessage.textContent = 'Registro Exitoso';
                registerMessage.style.color = 'turquoise';
            }else{
                registerMessage.textContent = data.message || 'Error en el Registro';
                registerMessage.style.color = 'orange';
            }
        } catch (error) {
            console.log(error)
            registerMessage.textContent = 'No se pudo realizar el REGISTRO';
            registerMessage.style.color = 'grey'
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
