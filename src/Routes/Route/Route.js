import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from '../../Components/Courses/Courses';
import Home from '../../Components/Home/Home';
import Main from '../../Layout/Main';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])