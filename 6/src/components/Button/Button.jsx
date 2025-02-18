import React from 'react';

function Button({onClick = null, title = ''}) {
    return (
        <button onClick={onClick}>{title}</button>
    );
}

export default Button;