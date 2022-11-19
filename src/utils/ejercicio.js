import React from 'react';

const parsearEjercicio = enunciado => {
    const parrafos = enunciado.split("$newline$");
    const ret = <>
        {parrafos.map((p, i) => <React.Fragment key={i}>{p}{i === parrafos.length - 1 ? null : <br />}</React.Fragment>)}
    </>;
    return ret;
};

export { parsearEjercicio };