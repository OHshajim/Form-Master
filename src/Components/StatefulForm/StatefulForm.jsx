import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('me')
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (pass.length < 6) {
            setError('password must be  longer then 6 character')
        }
        else {
            setError('')
            console.log(name, email, pass);
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleName} type="text" name="name" placeholder="Name" />
                <br />
                <input type="email" name="email" placeholder="Email"
                    onChange={handleEmail}
                />
                <br />
                <input type="password" name="password" placeholder="Password"
                    onChange={handlePass} required
                />
                <br />
                <button type='submit'>Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;