import React from 'react';
import { useParams } from 'react-router-dom';

const Pay = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>pay naw: {id}</h1>
        </div>
    );
};

export default Pay;