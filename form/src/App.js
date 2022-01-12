import {useState} from "react"
import './App.css';

function App() {
  const [value, setInput]= useState({
    firstName: "",
    lastName:"",
    email:"",
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleFirstNameInputChange = (event) => {
    console.log(handleFirstNameInputChange)
    setInput({...value, firstName: event.target.value})
  }

  const handleLAstNameInputChange = (event) => {
    console.log(handleLAstNameInputChange)
    setInput({...value, lastName: event.target.value})
  }

  const handleemailInputChange = (event) => {
    setInput({...value, email: event.target.value})
  }
  
  const handleSubmit = (event) =>{
  event.preventDefault();
  setSubmitted(true);
  }


  return (
    <div className="form-container">
    <form className="register-form" onSubmit={handleSubmit}>
    {submitted ? <div className="success-message">Success!Thank you for registering</div> :null}
       <input 
       disabled={submitted}
        onChange={handleFirstNameInputChange}
        value = {value.firstName}
        className="form-container"
        placeholder="First Name"
        name="firstName"/>
        {!submitted && !value.firstName ?<span>Please enter a first name</span> :null}
        
        <input 
        disabled={submitted}
         onChange={handleLAstNameInputChange}
         value= {value.lastName}
         className="form-container"
         placeholder="Last Name"
         name="lastName"/>
         {!submitted && !value.lastName ? <span>please enter a last name</span> : null}
        <input 
        
        disabled={submitted}
         onChange={handleemailInputChange}
         value= {value.email}
         className="form-container"
         placeholder="Email"
         name="email"/>
         {!submitted && !value.email ? <span>Please enter a email</span> : null}
        </form>
        <button>Submit</button>
    </div>
  
  );
}

export default App;
