import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseLayOut from '../../Components/Course/CourseLayOut/CourseLayOut';
import Home from '../../Components/Home/Home';

import Login from '../../Components/LoginOrSignUp/Login/Login';
import SignUp from '../../Components/LoginOrSignUp/SignUp/SignUp';
import Main from '../../Layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://programming-languages-server-pulakbala.vercel.app/courses')
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><CourseLayOut></CourseLayOut></PrivateRoute>,
                loader:({params})=> fetch(`https://programming-languages-server-pulakbala.vercel.app/courseDetails/${params.id}`)

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