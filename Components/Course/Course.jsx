// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import './Course.css';

const Course = (props) => {

    const { img, title, name, published, profile, duration} = props.course;
    const funTime = props.funTime;
    const bookmarkfun =props.bookmarkfun;

    

    return (
        <div className='course'>
            <img src={img} alt="" />
            <div className='course-info'>
                <div className='picname-bookmark'>
                    <div className='picname'>
                        <div>
                            <img src={profile} alt="" />
                        </div>
                        <div>
                            <p><strong>Author Name: {name}</strong></p>
                            <p>Published: {published} </p>
                        </div>
                    </div>
                    <a onClick={() => bookmarkfun()} className='bookmark'>bookmark</a>
                    {/* <FontAwesomeIcon icon="fa-solid fa-bookmark"> */}
                </div>
                <h2>Title: {title}</h2>
                <a onClick={() => funTime()}>mark as read</a>

            </div>
        </div>
    );
};

export default Course;