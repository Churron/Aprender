const documentosSEIA = [
    { id: 1, titulo: "Impacto Ambiental Dominga", estado: "aprobado", paginas: 120 },
    { id: 2, titulo: "Revisión de Aguas", estado: "pendiente", paginas: 45 },
    { id: 3, titulo: "Mitigación de Ruidos", estado: "aprobado", paginas: 89 },
    { id: 4, titulo: "Estudio de Suelos", estado: "rechazado", paginas: 210 }
];

// TU MISIÓN: 
// 1. Usa .filter() para obtener SOLO los documentos aprobados.
// 2. Inmediatamente después, encadena un .map() para extraer SÓLO los títulos de esos documentos aprobados.

const titulosAprobados = documentosSEIA
    .filter(documento => documento.estado)
    .map(docu => docu.titulo);

console.log(titulosAprobados);