import React, { useState } from 'react';
import '../../styles/App.css';
import { validateEmail} from '../../utils/helpers';


const styles = {
  contactPageStyle: {
    padding: '5%',
    marginBottom: '10%',
  },
  pageTitle: {
    // display: 'flex',
    // justifyContent: 'center',
    padding: '10%',
    color: '#5D2A42',
  }
}


export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setName(inputValue)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if ((!name)) {
      setErrorMessage('Name field is required');
      return;
    }
    alert(`Thanks for your submission, ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
  };

  return (
    <div className='container-fluid-lg'>
      <h1 style={styles.pageTitle}>Contact Me</h1>

      <div className='container-fluid d-flex justify-content-center' style={styles.contactPageStyle}>
        <form className='m-5' style={{background: '#BF4E30',borderRadius: '10px'}}>
          <div className='m-3' style={{width: 400 + 'px'}}>
            <input
              className='form-control'
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
          </div>
          <div className='m-3' style={{width: 400 + 'px'}}>
            <input
              className='form-control'
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
          </div>
          <button 
          type="button" 
          className='btn m-3 text-white btn-floating' 
          style={{background: '#E98A15'}}
          onClick={handleFormSubmit}
          >Submit</button>
        </form>
        {errorMessage && (
          <div className='p-2 d-flex align-content-center flex-wrap'>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </div>

    </div>
  );
}