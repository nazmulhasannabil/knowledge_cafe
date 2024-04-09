import { useEffect, useState } from 'react';
import './MainBody.css';
import Courses from '../Course/Course';
import Bookmark from '../Bookmark/Bookmark';
// import Product from '../Product/Product';

const MainBody = () => {
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setcourses(data))
    }, []);

    let Time = 0;
    const funTime = () => {
        Time = Time + parseInt(courses.duration);
        console.log(Time);
    };

    const bookmarkfun = () => {
        
        
    };

    return (
        <div className='main-body'>
            <div className='content-body'>
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                        funTime = {funTime}
                        bookmarkfun ={bookmarkfun}
                    ></Courses>
                    )
                }
            </div>
            <div className='bookmark'>
                <Bookmark
                    Bookmark={Bookmark}
                    funTime={funTime}
                ></Bookmark>
            </div>
        </div>
    );
};

export default MainBody;