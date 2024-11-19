import React from 'react'

import Register from './Register'

import { Routes, Route } from 'react-router-dom'

import Login from './Login'


const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>

        </>
    )
}

export default Auth
