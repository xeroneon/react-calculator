import React from 'react';

function Button(props) {
    return(
        <>
            <div className="button" onClick={props.handleButton}>
                <div className="button-inner">
                <p>{props.number}</p>
                </div>
            </div>
        </>
    )
}

export default Button;