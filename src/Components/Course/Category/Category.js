import React from 'react';


const Category = ({category}) => {
    console.log(category)
    
    return (
        <div>
            
            <h3 className='p-4'>{category.name}</h3>
        </div>
    );
};

export default Category;