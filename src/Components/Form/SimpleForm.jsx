
const SimpleForm = () => { 
    const handleForm= e=>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('submitted');
    }
    return (
        <div>
            <form onSubmit={handleForm }>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="email"name="email" placeholder="Email"/>
                <br />
                <input type="number" name="phone" placeholder="Phone number"/>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;