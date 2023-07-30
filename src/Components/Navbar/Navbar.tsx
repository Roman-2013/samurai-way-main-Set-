import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {MessagesPagePropsType} from '../../App';

type NavbarPropsType={
    frends:Array<{id:number, name:string, image:string}>
}
export const Navbar = (props: NavbarPropsType) => {
    console.log(classes)
    return (
        <nav className={classes.nav}>
            <div><NavLink className={navData => navData.isActive ? classes.active : classes.item} to={'/profile'}>Profile</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? classes.active : classes.item} to={'/dialogs'}>Messages</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? classes.active : classes.item} to={'/news'}>News</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? classes.active : classes.item} to={'/music'}>Music</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? classes.active : classes.item} to={'/settings'}>Settings</NavLink></div>

            <h2>Friends</h2>
            <div className={classes.friends}>
               {props.frends.filter(el=>el.id <=3).map(t=>

                   <div className={classes.frend}>
                       <img src={t.image} alt=""/>{t.name}</div>
                   )}






            </div>


        </nav>
    )
}