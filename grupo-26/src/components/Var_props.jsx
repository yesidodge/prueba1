import React, { Fragment } from "react";

export default function Saludar(props) {
    return (
        <h2>La edad de {props.nombre} son {props.edad} años</h2>
    )
}