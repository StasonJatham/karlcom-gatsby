import React from "react"
import Cookie from "./Cookie"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <>
            <div className='md:mx-4 sm:mx-2 xl:mx-auto max-w-screen-xl '>
                <Navbar />
                {children}
                <Footer />
                <Cookie />
            </div>
        </>

    )
}