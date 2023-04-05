import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNavbar.css'

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://programming-languages-server-pulakbala.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div className='leftSide-navbar'>
           <div>
           <h4>Course length : {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)

            }
           </div>
        </div>
    );
};

export default LeftSideNavbar;