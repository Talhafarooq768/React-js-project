import React from 'react'

import Header from 'components/Header'

import Home from './Home'

import Footer from 'components/Footer'

import { Routes, Route } from 'react-router-dom'

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend
