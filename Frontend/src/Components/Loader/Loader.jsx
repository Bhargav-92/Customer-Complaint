// Loader.js
import React from 'react';
import '../Loader/loader.css'; // Make sure to create appropriate CSS for the loader
import LoaderSpinner from '../../assets/logo/Loader.svg'

const Loader = () => {
    return (
        <div className="loader">
            <img src={LoaderSpinner} alt="Loading..." /> 
          
          <center>
          <br /><h4 style={{color: '#000'}}>Loading Please Wait...</h4>
          </center>  

       
         
        </div>
    );
};

export default Loader;
