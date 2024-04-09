import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {

    return (
        <div>
            <h6>bookmark</h6>

            <h4>Total Reading Time : {props.funTime} </h4>
        </div>
    );
};

export default Bookmark;