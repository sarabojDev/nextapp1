"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'


const AuthProvider = createContext()
export const useAuth = () => {
    const data = useContext(AuthProvider)
    return data;
}

export const UserAuthProviderContainer = ({ children }) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const getUserCredient = () => {
        const getLocal = localStorage.getItem("myToken");
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((dataD) => {
                dataD.json().then((daaF) => {
                    console.log(daaF, isLoading)
                    setTimeout(() => {
                        setData(daaF)
                        setLoading(false)
                    }, 1000)
                })
            })
        console.log(getLocal)
    }
    useEffect(() => {
        getUserCredient()
        console.log("FFFF")
    }, [])
    return <AuthProvider.Provider value={{ data, setData, isLoading, setLoading }}>
        <>
            {isLoading ? (
                <div className='w-full h-screen bg-yellow-400 flex items-center justify-center'>LOADING......</div>) : (
                <>
                    {children}
                </>
            )

            }
        </>

    </AuthProvider.Provider>
}

export default useAuth