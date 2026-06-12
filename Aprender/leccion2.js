function consultarAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const conexionExitosa = Math.random() > 0.5; // 50% de éxito / 50% de fracaso
            
            if (conexionExitosa) {
                resolve("✅ ÉXITO: Análisis del proyecto Dominga completado.");
            } else {
                reject(new Error("❌ FALLA CRÍTICA: No se pudo conectar a los servidores."));
            }
        }, 1500);
    });
}

// 1. Ponemos 'async' antes de la función
async function procesarDocumento() {
    try {
        // 2. Usamos 'await' con espacio
        const resultado = await consultarAPI();
        console.log(resultado);

    // 3. El catch recibe el 'error' automáticamente entre paréntesis
    } catch (error) {
        console.log("El error fue: " + error.message);
    }
}

// 4. Ejecutamos la función llamándola simplemente por su nombre (sin return)
procesarDocumento();