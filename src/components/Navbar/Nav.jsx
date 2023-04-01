import { NavLink,Link } from "react-router-dom";
import navbar from "./Nav.module.css";

const Nav = () =>{
    return(
      <nav className= {navbar.nav}>
        <ul className= {navbar.menu}>
          <li className={navbar.menu__item}><NavLink to =""  className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}} >Profile</NavLink></li>
          <li className={navbar.menu__item}><NavLink to ="/dialogs" className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}}>Messages</NavLink></li>
          <li className={navbar.menu__item}><NavLink to ="/news" className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}}>News</ NavLink></li>
          <li className={navbar.menu__item}><NavLink to ="/music" className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}}>Music</NavLink></li>
          <li className={navbar.menu__item}><NavLink to ="/users" className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}}>Find friends</NavLink></li>
          <li className={navbar.menu__item}><NavLink to ="/settings" className={({isActive})=> {return isActive ? `${navbar.menu__link} ${navbar.activeLink} `: navbar.menu__link}}>Settings</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;