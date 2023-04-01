import h from './Header.module.css';
import logo from './../../logo.svg';

const Header = () =>{
    return(
        <header className={h.header}>
            <img className={h.logo} src={logo} alt=""/>
            <h1 className={h.logoTitle}>First project</h1>
        </header>
    )
}


export default Header;