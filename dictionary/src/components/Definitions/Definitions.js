import React from 'react';
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
    return (
        <div className='meanings'>
            {word === "" ? (
                <span className="subTitle">Start by typing a word in search</span>
            ) : (
                "something"
            )
            }
        </div>
    )
}

export default Definitions