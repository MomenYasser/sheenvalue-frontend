import React from 'react';

function TextField({
    name,
    label,
    value,
    errors,
    onChange,
    showFormErrors,
}) {
    return (
        <>
            <p>{label}</p>

            <input
                type={'text'}
                name={name}
                onChange={e => onChange(name, e.target.value)}
                value={value}
            />
            
            {showFormErrors && (
                <p>{errors[0] || ''}</p>
            )}
        </>
    );
}

export default TextField;