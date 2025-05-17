import Navbar from '../layout/navbar';
import Sidebar from '../layout/sidebar';
import { Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react';

const MainLayout = () => {
    const [nav, setNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setNav(!mobile);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleNav = () => setNav(prev => !prev);

    return (
        <>
            <Navbar toggleNav={toggleNav} isMobile={isMobile} />
            <div className="below-nav">
                <Sidebar navOpen={nav} />
                {!isMobile && (
                    <div
                        className="nav-bur"
                        onClick={toggleNav}
                        style={{ left: nav ? '223px' : '43px' }}
                    >
                        <RxHamburgerMenu />
                    </div>
                )}
                <div className={`main-content ${nav ? 'with-sidebar' : 'collapsed-sidebar'}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout;
