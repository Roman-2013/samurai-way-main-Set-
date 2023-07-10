import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

 export const Navbar = () => {
     console.log(classes)
    return (
        <nav className={classes.nav}>
            <div> <NavLink className={`${classes.item} ${classes.active}`} to={'/profile'}>Profile</NavLink></div>
            <div> <NavLink className={`${classes.item} ${classes.active}`} to={'/dialogs'}>Messages</NavLink></div>
            <div> <NavLink className={`${classes.item} ${classes.active}`} to={'/news'}>News</NavLink></div>
            <div> <NavLink className={`${classes.item} ${classes.active}`} to={'/music'}>Music</NavLink></div>
            <div> <NavLink className={`${classes.item} ${classes.active}`} to={'/settings'}>Settings</NavLink></div>
            <div> <NavLink className={`${classes.item} ${classes.active}` }  to={'/settings'} >Settings</NavLink></div>

        </nav>
    )
}