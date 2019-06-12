import React from "react";

function Result(props) {

    return (
        <>
            <div id="result" onClick={props.handleClear}>
                <p>
                    {props.text}
                </p>
            </div>
        </>
    )
}

export default Result;