import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ParcialesDataService from '../services/parciales';

const Parciales = ({ parciales }) =>
    <>
        {parciales.map((p, i) =>
            <React.Fragment key={p.id}>
                <Link to={'../parcial/' + p.id}>&nbsp;letra <strong>{p.letra}</strong></Link>
                {i === parciales.length - 1 ? <>.</> : <>,</>}
            </React.Fragment>
        )}
    </>;

const ListaParcialesMateria = () => {
    const [parciales_1, setParciales_1] = useState([]);
    const [parciales_2, setParciales_2] = useState([]);
    const { materia } = useParams();
    const retrieveParciales = () => {
        ParcialesDataService.getParcialesMateria(materia)
            .then(parciales => {
                setParciales_1(parciales.parcial_1);
                setParciales_2(parciales.parcial_2);
            })
            .catch(e => {
                console.log(e);
            });
    }
    useEffect(retrieveParciales, []);
    return (
        <>
        <h1>Exámenes viejos</h1>
            {parciales_1.length === 0 ? null : <>
                <h2>Primeros parciales</h2>
                <ul>
                    {parciales_1.map(a => <li key={a.anio}>{a.anio}
                        <ul>
                            {a.cuat_2.length === 0 ? null : <li>2° cuatrimestre:
                                <Parciales parciales={a.cuat_2} />
                                </li>}
                            {a.cuat_1.length === 0 ? null : <li>1° cuatrimestre:
                                <Parciales parciales={a.cuat_1} />
                                </li>}
                            {a.verano.length === 0 ? null : <li>Curso de verano:
                                <Parciales parciales={a.verano} />
                            </li>}
                        </ul>
                    </li>)}
                </ul>
            </>}
            {parciales_2.length === 0 ? null : <>
                <h2>Segundos parciales</h2>
                <ul>
                    {parciales_2.map(a => <li key={a.anio}>{a.anio}
                        <ul>
                            {a.cuat_1.length === 0 ? null : <li>1° cuatrimestre:
                                <Parciales parciales={a.cuat_1} />
                            </li>}
                            {a.cuat_2.length === 0 ? null : <li>2° cuatrimestre:
                                <Parciales parciales={a.cuat_2} />
                            </li>}
                        </ul>
                    </li>)}

                </ul>
            </>
            }
        </>
    );
}

export default ListaParcialesMateria;