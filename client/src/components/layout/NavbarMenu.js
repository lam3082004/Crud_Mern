
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import admin from '../../assets/admin.svg'
// import logoutIcon from '../../assets/logout.svg'
// import Button from 'react-bootstrap/Button'
//import setting from '../../assets/setting.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarMenu = () => {

    const {
        authState: {
            user: { username }
        },
        logoutUser
    } = useContext(AuthContext)

    const logout = () => logoutUser()


    return (
        <Navbar expand='lg' bg='danger' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img
                    src={learnItLogo}
                    alt='learnItLogo'
                    width='32'
                    height='32'
                    className='mr-2'
                />
                Contest
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <div class="input-group">
                <input type="search" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
            <Navbar.Collapse id='basic-navbar-nav' >
                <Nav className='mr-auto'  >
                    <Nav.Link
                        className='font-weight-bolder text-white bg- '
                        to='/dashboard'
                        as={Link}

                    >
                        Prepare
                    </Nav.Link>
                    <Nav.Link
                        className='font-weight-bolder text-white bg-'
                        to='/about'
                        as={Link}
                    >
                        Running
                    </Nav.Link>
                    <Nav.Link
                        className='font-weight-bolder text-white bg-'
                        to='/about'
                        as={Link}
                    >
                        Finish
                    </Nav.Link>
                    <Nav.Link
                        className='font-weight-bolder text-white bg-'
                        to='/about'
                        as={Link}
                    >
                        Reward
                    </Nav.Link>
                </Nav>

                <Nav>
                    <NavDropdown title={username} id="navbarScrollingDropdown" className="text-white-50">
                        <NavDropdown.Item
                            className="bg-3"
                            to='/profile'
                            as={Link}
                        >
                            Your Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className="bg-3"
                            to='/setting'
                            as={Link}
                        >
                            Setting
                        </NavDropdown.Item>
                        <NavDropdown.Item className="bg-3" onClick={logout} >
                            Logout
                        </NavDropdown.Item>

                    </NavDropdown>
                    <img
                        src={admin}
                        alt='admin'
                        width='25'
                        padding='10px'
                        height='40'
                        className='mr-1'
                    />
                </Nav>

            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarMenu