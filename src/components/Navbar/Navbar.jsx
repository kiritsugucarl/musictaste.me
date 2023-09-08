import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({isMobileNavOpen, onMobileMenuToggle}) => {

    const handleMobileMenuClick = () => {
        onMobileMenuToggle(false);
    }

    return(
        <div className="header">

            {/* Desktop nav */}
            <div className="nav-wrapper">
                <nav className="desktop-nav">
                    <ul className="desktop-nav-ul">
                        <div className="desktop-nav-li">
                            <Link to ='/' className='desktop-nav-link'>Link</Link>
                        </div>
                    </ul>
                </nav>
            </div>
            {/* Mobile navbar */}
        </div>
    )
}

export default Navbar;