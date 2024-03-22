import React from 'react';
import Me from '../GrandChild/Me';
import Sister from '../GrandChild/Sister';
import Brother from '../GrandChild/Brother';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <div className='flex gap-10 p-5 m-5 border border-purple-600 '>
            <Sister></Sister>
            <Brother></Brother>
            <Me></Me>
            </div>
        </div>
    );
};

export default Father;