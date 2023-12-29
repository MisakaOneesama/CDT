import React from 'react';
import RoundCompletionGraph from './roundcompletionGraph';

const outputProyecto = ({ data }) => {

    console.log(data)

    return (
        <div>
        <h2>Information Viewer</h2>
        {data.map((item) => (
            <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <RoundCompletionGraph percentage={item.completionPercentage} />
            </div>
        ))}
        </div>

    );
};

export default outputProyecto;
