import { Link} from 'react-router-dom'
import { Button } from './Button';
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext,useState, useEffect, React } from 'react'
import './Navbar.css';
import NavDropdown from "react-bootstrap/NavDropdown"

const NavbarMenu = () => {

    const {
        authState: {
            user: { username }
        }
    } = useContext(AuthContext)

    const { logoutUser  } = useContext(AuthContext)

    const logout = () => logoutUser()
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
    showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <Link to='/dashboard' className='navbar-logo' onClick={closeMobileMenu}>
                    EQualEdu
                    <i class='fab fa-typo3' />
                </Link>
                {/* <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/ranking'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Ranking
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/events'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/club'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Club
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/profile'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline' onclick={logout}>Log Out</Button>} */}
                    <NavDropdown title={username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="./profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="./setting">Setting</NavDropdown.Item>
                        <NavDropdown.Item href="./contact">Contact</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="">{button && <Button onclick={logout}>Log Out</Button>}</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </nav>  
        </>
    )
}

export default NavbarMenu