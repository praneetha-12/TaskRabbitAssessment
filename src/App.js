import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [formInputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setInputs(value);

    if(!isEmailValid(value)){
      alert('Please enter a valid email address');
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hi ${formInputs.firstname}. You've successfully registered as a user`)
  }
  
  return (
    <form onSubmit={handleSubmit}> 
        <label for="firstname"> First Name </label>
        <input name="firstname" type="text" value={formInputs.firstname || ""} onChange={handleChange} required></input><br/>
        
        <label for="lastname"> Last Name </label>
        <input name="lastname" type="text"  value={formInputs.lastname || ""} onChange={handleChange} required></input><br/>

        <label for="number"> Mobile Number </label>
        <input name="number" type="number" value={formInputs.number || ""} onChange={handleChange} required></input><br/>

        <label for="email"> Email </label>
        <input name="email" type="email" value={formInputs.email || ""} onChange={handleEmailChange} required></input><br/>

        <button type="submit" class="btn btn-primary">Submit</button>
        
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
