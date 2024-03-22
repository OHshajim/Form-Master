import Spacial from '../Spacial/Spacial';

const Cousin = ({ name }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <div className='  p-4 rounded-xl border border-purple-600 '>
                <p>{name}</p>
                <div>

                    {
                        name==="Lamiya"&&<Spacial ></Spacial>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cousin;