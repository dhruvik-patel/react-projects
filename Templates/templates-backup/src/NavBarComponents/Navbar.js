import React, { useState } from 'react'
import useDeviceWidth from './useDeviceWidth'
import './static/styles.css'
import { items } from './MenuItems'
import { BsList, BsX } from "react-icons/bs";

const NavBar = () => {

    const { isDesktop } = useDeviceWidth()

    const [click, setClick] = useState(false)

    const handleMenuIcon = () => {
        setClick(!click)
    }

    return (
        <>
            <div className='navbarContainer'>
                <nav className='navbar'>
                    <div className='logo'>
                        <h1>BRAND</h1>
                    </div>
                    <ul className='menu-items'>
                        {isDesktop
                            ?
                            items && items.map(item => (
                                <li key={item.id}><a href={item.link}>{item.name}</a></li>
                            ))
                            :
                            <div className='menuIcon' onClick={handleMenuIcon}>
                                {click
                                    ? <BsX style={{ width: "30px", height: '30px' }} />
                                    : <BsList style={{ width: "30px", height: '30px' }} />}
                            </div>
                        }
                    </ul>
                </nav>
            </div>
            {
                !isDesktop && click ?
                    <div className='menu-mobile-container'>
                        <ul className='menu-items-mobile'>
                            {items && items.map(item => (
                                <li key={item.id}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    : ''
            }
        </>
    )
}

export default NavBar