import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies';
import FormComponent from './components/Form'; 
import DisplayComponent from './components/Display'; 


function App() {
    const [submissions, setSubmissions] = useState([]);

    const handleFormSubmit = (data) => {
        setSubmissions([...submissions, data]);
    };

    return (
        <div>
            <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Fill The Form:&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</h1>
            <FormComponent onSubmit={handleFormSubmit} />
            <DisplayComponent submissions={submissions} />
        </div>
    );
}

export default App
