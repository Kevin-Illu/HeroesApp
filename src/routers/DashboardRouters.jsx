import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { Hero } from '../components/hero/Hero'

export const DashboardRouters = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto md:container">
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/hero/:heroId" element={<Hero />} />
                </Routes>
            </div>
        </>

    )
}
