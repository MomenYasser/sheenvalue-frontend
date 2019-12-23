import React from 'react';

function TextInput({
    name,
    label,
    value,
    errorMessages,
    onChangeState,
    errorForm,
    type,
    formType
}) {
    return (
        <div>
            <p style={{color:'white'}}>{label}</p>
            <input
                type={type}
                name={name}
                onChange={e => onChangeState(name, e.target.value,formType)}
                value={value}
            />
            {errorMessages.length>0 && (<p style={{color:'red',fontSize:'15px'}}>{errorMessages[0] || ''}</p>)}
        </div>
    );
}

export default TextInput;