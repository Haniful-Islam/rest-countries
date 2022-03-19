import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Visit Every Country in the world!!</h1>
            <p>All Countries:{countries.length}</p>
            <div className="Countries-container">
                {
                    // countries.map(country => console.log(country))
                }
                {
                    countries.map(country => <Country
                        country={country}



                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; 