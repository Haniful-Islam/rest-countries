import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    const { name, area, population, region, flags } = props.country;
    return (
        <div className="country">
            <h1>Country name:{name.common}</h1>
            <h3>Population:{population}</h3>
            <h3>region:{region}</h3>
            <h3>Area:{area}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country; 