import React from 'react'
import './input.css'
const input = ({name,label,change,type,isValid,...rest}) => (
    <div className="container">
        <label htmlFor={name} className="label">{label}</label>
        <input {...rest} name={name} id={name} onChange={change} type={type} className='myInput'/>
        {isValid && <p style={{color : 'red'}}>This field is required</p>}
    </div>
)
export default input