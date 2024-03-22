import Father from './Child/Father';
import Ancle from './Child/Ancle';
import Anty from './Child/Anty';
import { createContext, useState } from 'react';


export const GiftContext = createContext('')
export const MoneyContext = createContext('')

const Grand = () => {
    const gift = "diamond"
    const [money,setMoney]=useState(1000)
    return (
        <div className='w-screen'>
            <h2>Grand Father</h2>
            <p>Money : {money}</p>
            <div className='flex justify-between border p-8 m-5 gap-10  '>
               <MoneyContext.Provider value={[money,setMoney]}>
               <GiftContext.Provider  value={gift}>
                    <Father></Father>
                    <Ancle></Ancle>
                    <Anty></Anty>
                </GiftContext.Provider>
               </MoneyContext.Provider>

            </div>
        </div>
    );
};

export default Grand;