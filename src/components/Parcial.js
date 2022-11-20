import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ParcialesDataService from '../services/parciales';
import { parsearEjercicio } from '../utils/ejercicio';

const getMathJax = () => window.MathJax;

const Parcial = () => {
    const [parcial, setParcial] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { materia, id } = useParams();
    const retrieveParcial = () => {
        ParcialesDataService.getParcialById(id)
            .then(p => { setParcial(p); setLoaded(true); })
            .catch(e => {
                console.log(e);
            });
    }
    useEffect(retrieveParcial, []);
    useEffect(() => {
        const MathJax = getMathJax();
        if (!MathJax.typeset) {
            return;
        }
        MathJax.typeset();
    }, [loaded]);
    return (
        <>
            {loaded && materia === parcial.materia ? <>
                <h1>{parcial.tipo_parcial === "1" ? "Primer" : "Segundo"} parcial</h1>
                <h2>{parcial.cuatrimestre === "1" ? "1° cuat. de " : parcial.cuatrimestre === "2" ? "2° cuat. de " : "Curso de verano "}
                {parcial.anio} - 
                {parcial.letra === 'r' ? 'recuperatorio' : parcial.letra} - 
                tema {parcial.tema}</h2>
                <ol className='scrollable'>
                    <li>{parsearEjercicio(parcial.ej_1.enunciado)}</li>
                    <li>{parsearEjercicio(parcial.ej_2.enunciado)}</li>
                    <li>{parsearEjercicio(parcial.ej_3.enunciado)}</li>
                    <li>{parsearEjercicio(parcial.ej_4.enunciado)}</li>
                </ol>
                <div className='linkLista'>
                    <Link to="../parciales/">Ir a la lista de exámenes viejos</Link>
                </div>
            </> : null
            }
        </>
    );
}

export default Parcial;