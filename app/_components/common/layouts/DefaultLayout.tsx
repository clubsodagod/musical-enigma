'use client'
import React, { ReactNode } from 'react'
import { MotionBody } from '../framer/MotionBody'
import { useAppContext } from '@/app/_context/AppContext'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/app/_library/themes'
import Navbar from '../Navbar'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    // access: ctnRef, controls, gradientVariants
    const {
        appContainer: {
            scrollRef,
        }
    } = useAppContext()

    return (
        <>

            <ThemeProvider theme={theme}>
            <MotionBody
                id='default-body'

            >
            <Navbar />
                <main
                    className='main'
                    ref={scrollRef}
                >{children}</main>
            </MotionBody>
            </ThemeProvider>


        </>


    )
}

export default DefaultLayout