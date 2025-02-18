import React from 'react';

function Select({data, onChange = null, defaultValue}) {

    return (
        <select onChange={onChange} defaultValue={defaultValue}>
            {data.map((el, i) => (
                <option key={i} value={el.value}>{el.name}</option>
            ))}
        </select>
    )
}

export default Select;