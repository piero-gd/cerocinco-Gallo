import React from "react";
import styled from 'styled-components';

const Container = styled.div`

`

function Carta({ nombre, children }) {
    return (
        <div>
            { children }
            <p>Hola { nombre }, espero que esten muy bien</p>
        </div>
    )
}

export default Carta;