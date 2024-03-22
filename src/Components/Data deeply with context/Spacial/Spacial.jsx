import { useContext } from "react";
import {   GiftContext } from "../Grand";

const Spacial = () => {
    const gift = useContext(GiftContext)
    return (
        <div className='border p-3 rounded-xl border-blue-700'>
            <h2>Spacial</h2>
            <p>{gift}</p>
        </div>
    );
};

export default Spacial;