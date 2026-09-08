// Base de datos simulada de documentos
const documentosSEIA = [
    { id: 1, titulo: "Impacto Ambiental Dominga", estado: "aprobado", paginas: 120 },
    { id: 2, titulo: "Revisión de Aguas", estado: "pendiente", paginas: 45 },
    { id: 3, titulo: "Mitigación de Ruidos", estado: "aprobado", paginas: 89 }
];

// TU MISIÓN: Usa .map() para crear un nuevo arreglo que contenga ÚNICAMENTE los títulos de los documentos.
// Debe quedar así: ["Impacto Ambiental Dominga", "Revisión de Aguas", "Mitigación de Ruidos"]

const soloTitulos = documentosSEIA.map(documento => documento.motor);

console.log(soloTitulos);