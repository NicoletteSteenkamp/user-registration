import React from 'react';
import './App.css'; 
import RegisterForm from './RegisterForm'; 
import '../src/images/Image.png';
import '../src/images/Logo.png';
function App() {
    return (
        <div className="App">
            <img src="Logo.png alt=logo"/>
            <RegisterForm />
            <img src="Image.png alt=image"/>
        </div>
    
    );
}

export default App;
