import axios from 'axios';

class ParcialesDataService {
    getParcialById(id) {
        const url = 'https://mateave.pythonanywhere.com/api/parciales/id/' + id;
        return axios.get(url).then(response => response.data);
    }
    getParcialesMateria(materia) {
        const url = "https://mateave.pythonanywhere.com/api/parciales/" + materia + "/";
        return axios.get(url)
            .then(response => arbolParciales(response.data));
    }
}

const sortParciales = (p, q) => p.letra < q.letra ? -1 : p.letra > q.letra ? 1 : 0;

const ordenarPorAnioYCuatri = parciales => {
    const anios = [...new Set(parciales.map(p => p.anio))].sort();
    return anios.map(anio => ({
        anio: anio,
        cuat_1: parciales.filter(p => p.anio === anio && p.cuatrimestre === "1")
            .map(p => ({ id: p.id, letra: p.letra }))
            .sort(sortParciales),
        cuat_2: parciales.filter(p => p.anio === anio && p.cuatrimestre === "2")
            .map(p => ({ id: p.id, letra: p.letra }))
            .sort(sortParciales),
    }));

}

const arbolParciales = (parciales) => {
    return ({
        parcial_1: ordenarPorAnioYCuatri(parciales.filter(p => p.tipo_parcial === "1")),
        parcial_2: ordenarPorAnioYCuatri(parciales.filter(p => p.tipo_parcial === "2"))
    });
};

export default new ParcialesDataService();