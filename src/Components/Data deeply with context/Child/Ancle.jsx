import { useContext } from 'react';
import Cousin from '../GrandChild/Cousin';
import { MoneyContext } from '../Grand';

const Ancle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    const AddMoney = () => {
        setMoney(money + 1000)
    }
    return (
        <div>
            <h2>Ancle</h2>
            <div className='flex gap-10 p-5 m-5 border border-purple-600 '>
                <Cousin name={'Arif'}></Cousin>
                <Cousin name={'Jahid'}></Cousin>
                <Cousin name={'Ashik'}></Cousin>
            </div>
            <div>
                <p>Money : {money}</p>
                <button onClick={AddMoney}>Add money</button>
            </div>
        </div>
    );
};

export default Ancle;