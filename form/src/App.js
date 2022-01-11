import {useState} from "react"
import './App.css';

function App() {
  const [value, setInput]= useState({
    firstName: "",
    lastName:"",
    email:"",
  });

  const handleFirstNameInputChange = (event) => {
    console.log(handleFirstNameInputChange)
    setInput({...value, firstName: event.target.value})
  }

  const handleLAstNameInputChange = (event) => {
    setInput({...value, lastName: event.target.value})
  }

  const handleemailInputChange = (event) => {
    setInput({...value, email: event.target.value})
  }



  return (
    <div className="form-container">
    <form className="register-form">
       <input onChange={handleFirstNameInputChange}
        value = {value.firstName}
        className="form-container"
        placeholder="First Name"
        name="firstName"/>
         <input onChange={handleLAstNameInputChange}
         value= {value.lastName}
        className="form-container"
        placeholder="Last Name"
        name="lastName"/>
         <input onChange={handleemailInputChange}
         value= {value.email}
        className="form-container"
        placeholder="Email"
        name="email"/>
        </form>
    </div>
  
  );
}

export default App;
