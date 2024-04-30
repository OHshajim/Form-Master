import './App.css'
import Grand from './Components/Data deeply with context/Grand'
import SimpleForm from './Components/Form/SimpleForm'
import HookForm from './Components/HooksForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {

  const handleLogIn = data => {
    console.log('Log in data', data);
  }
  const handleUpdate = data => {
    console.log("updated data :", data);
  }
  return (
    <>

      <h1>Forms variant</h1>
      <SimpleForm></SimpleForm>
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm handleSubmit={handleLogIn} submit={'log in'}>
        <div>
          <h3>Log In </h3>
          <p>log in and see new massages</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdate} submit={'Update'}>
        <div>
          <h3>Update</h3>
          <p>update your profile and looks new</p>
        </div>
      </ReusableForm>
      {/* props share */}
      <Grand></Grand>
    </>
  )
}

export default App
