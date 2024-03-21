import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    const refName = useRef('')
    const refEmail = useRef('')
    const refPass = useRef('')
    const handleSubmit = e => {
        console.log(refName.current.value);
        console.log(refEmail.current.value);
        console.log(refPass.current.value);
        e.preventDefault()
    }
    useEffect(()=>{
        refName.current.focus()
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={refName}
                    type="text" name="name" placeholder="Name" />
                <br />
                <input type="email" name="email" placeholder="Email"
                    ref={refEmail}
                />
                <br />
                <input type="password" name="password" placeholder="Password" ref={refPass}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default RefForm;