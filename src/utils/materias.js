const nombreMateria = materia => {
    const materias = {
        "51": "Matemática (51)",
        "66": "Análisis Matemático A (66)",
        "62": "Álgebra A (62)",
        "72": "Análisis Matemático (72)",
        "27": "Álgebra (27)",
    };
    return materias[materia];
};

export { nombreMateria };