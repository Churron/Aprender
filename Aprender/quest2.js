// Base de datos simulada
const documentosSEIA = [
    { id: 1, titulo: "Impacto Ambiental Dominga", estado: "aprobado", paginas: 120 },
    { id: 2, titulo: "Revisión de Aguas", estado: "pendiente", paginas: 45 },
    { id: 3, titulo: "Mitigación de Ruidos", estado: "aprobado", paginas: 89 },
    { id: 4, titulo: "Estudio de Suelos", estado: "rechazado", paginas: 210 }
];

// TU MISIÓN: Usa .filter() y una función de flecha para quedarte SÓLO 
// con los objetos cuyo estado sea exactamente igual a "aprobado".

const documentosAprobados = documentosSEIA.filter( documento => documento.paginas > 50 );

console.log(documentosAprobados);