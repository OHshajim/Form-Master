import React from 'react';
import Cousin from '../GrandChild/Cousin';

const Anty = () => {
    return (
        <div>
            <h3>Anty</h3>
            <div className='flex gap-10 p-5 m-5 border border-purple-600 '>
                <Cousin name={'Mithila'}></Cousin>
                <Cousin name={'Lamiya'}></Cousin>
                <Cousin name={'Sangita'}></Cousin>
            </div>
        </div>
    );
};

export default Anty;