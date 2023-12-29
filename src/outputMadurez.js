// Este output debe mostrar con un grafico de completitud circular, 
// el cual tendra un display al medio del porcentaje logrado en cada principio
import React, { useState } from 'react';



const outputMadurez = ({ data }) => {
    const selectedValues = data.state ? data.state.selectedValues : [];
  
    return (
        <div>
            <h2>Selected Values:</h2>
            <ul>
            {selectedValues.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            </ul>
        </div>
    );
};

export default outputMadurez