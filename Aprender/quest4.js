// Respuesta simulada de la IA después de procesar una reunión
const respuestaIA = {
    id: "req_98765",
    modelo: "claude-3-opus",
    tokensUsados: 450,
    datos: {
        resumen: "El cliente aprobó la vectorización con Pinecone.",
        nivelConfianza: 0.98,
        fecha: "2026-05-19"
    }
};

// TU MISIÓN: Usa la destructuración de objetos para extraer SÓLO 'resumen' y 'nivelConfianza' 
// directamente del objeto 'respuestaIA.datos' en una sola línea de código.

// Reemplaza esta línea novata con destructuración moderna:
// const resumen = respuestaIA.datos.resumen;
// const nivelConfianza = respuestaIA.datos.nivelConfianza;

const { resumen, fecha, nivelConfianza} = respuestaIA.datos, {id, modelo} = respuestaIA 

console.log(resumen);
console.log(fecha);
console.log(id)