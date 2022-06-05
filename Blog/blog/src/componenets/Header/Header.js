import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    
    // const items = [{'Home':'/'},{'Create Post':'/'},{'About':'/'}]
    // const links = items.map((item, index) => <li key={index}><a href={item[Object.keys(item)]}>{Object.keys(item)}</a></li>)
    

    return (
        <header className={classes.Header}>
            <nav>
                <ul>
                    {/* {links} */}
                    <li><NavLink to='/' exact='true'>
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to='/new-post'>
                            Create Post
                        </NavLink>
                    </li>
                    <li><NavLink to='/about'>
                           About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
