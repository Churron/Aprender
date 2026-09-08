const reportes = [
    { titulo: "Aguas_Subterraneas", estado: "rechazado" },
    { titulo: "Mitigacion_Polvo", estado: "aprobado" },
    { titulo: "Impacto_Acustico", estado: "aprobado" }
];

// MISIÓN: Encadenar un .filter() y luego un .map() para que la variable 
// 'reportesUtiles' sea exactamente una lista así: [ 'Mitigacion_Polvo', 'Impacto_Acustico' ]

const reportesUtiles = reportes  
    .filter( aprobado => aprobado.estado === "aprobado")
    .map( titulos => titulos.titulo );
    
console.log(reportesUtiles);