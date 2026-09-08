// Simulamos el motor de IA de la empresa
function simularIA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // La IA devuelve un JSON (Objeto)
            resolve({
                estado: 200,
                datos: {
                    intencion: "resumen_reunion",
                    textoGenerado: "El cliente aprobó la nueva arquitectura. Empezamos el lunes.",
                    confianza: 0.95
                }
            });
        }, 2000); 
    });
}

async function consultarAgente() {
    try {
        console.log("🤖 Iniciando Agente Corporativo...");
        console.log("⏳ Pensando la respuesta...");

        // 1. Usamos await para esperar a la IA y guardamos el objeto en la variable 'respuesta'
        const respuesta = await simularIA();

        // -------------------------------------------------------------
        // TU MISIÓN AQUÍ:
        // El objeto completo está guardado en la variable 'respuesta'.
        // Escribe un console.log que imprima ÚNICAMENTE el mensaje:
        // "El cliente aprobó la nueva arquitectura. Empezamos el lunes."
        // -------------------------------------------------------------
        
        // Escribe tu console.log aquí abajo:
        console.log(respuesta.datos.textoGenerado)

    } catch (error) {
        console.log("❌ Error Encontrado 505: " + error.message);
    }
}

consultarAgente();