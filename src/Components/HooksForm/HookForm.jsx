import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name ,handleNameCng]= useInputState('me ghj')
    const ChangeEmail = useInputState('aj2G@HASD.MAI')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(ChangeEmail.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameCng}
                    type="text" name="name" placeholder="Name" /> */}
                <br />
                <input {...ChangeEmail}
                    type="email" name="email" placeholder="Email"/>
                <br />
                <input
                    type="password" name="password" placeholder="Password"/>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;