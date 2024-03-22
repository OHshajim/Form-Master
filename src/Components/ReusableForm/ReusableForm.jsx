
const ReusableForm = ({handleSubmit ,submit ,children}) => {
    function handleLocalSubmit(e){
        e.preventDefault()
        
        const data ={
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
        handleSubmit(data);
    }
    
    return (   
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <br />
                <input type="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" placeholder="Password"/>
                <br />
                <button type='submit'>{submit}</button>
            </form>
        </div>
    );
};

export default ReusableForm;