import UserDashboardNav from '@/Components/DashboardComponents/UserDashboardNav'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <section className='h-screen '>
                <div className="grid grid-cols-12 ">
                    <div className="sidebar_container py-7 md:py-12 bg-brandPrimary col-span-2  h-screen ">
                        <div className="logo_container px-2 sm:px-4 lg:px-8 ">
                            <img src="/images/logo black.png" alt="Logo" />
                        </div>
                        <div className="links_container mt-10 lg:mt-16">
                            <UserDashboardNav />
                        </div>
                    </div>
                    <div className="content_container bg-slate-600 col-span-10 py-5 sm:py-8 lg:py-10 px-5">
                        {children}
                    </div>
                </div>
            </section>

        </>
    )
}

export default layout