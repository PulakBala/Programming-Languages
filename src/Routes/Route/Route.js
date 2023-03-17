import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseLayOut from '../../Components/Course/CourseLayOut/CourseLayOut';

import Home from '../../Components/Home/Home';
import Login from '../../Components/LoginOrSignUp/Login/Login';
import SignUp from '../../Components/LoginOrSignUp/SignUp/SignUp';
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
                element: <CourseLayOut></CourseLayOut>,
                loader:() => fetch(`https://programming-languages-server-pulakbala.vercel.app/courses`)
                
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])