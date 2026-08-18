import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

/**
 * Enterprise Navbar component.
 * Implements sticky positioning, active route highlighting, and a responsive mobile drawer menu.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        <NavLink to="/" className="logo" onClick={closeMenu} aria-label="Apex Solutions Home">
          <div className="logo-icon">
            <Activity size={18} />
          </div>
          <span>Apex<span className="gradient-accent">Solutions</span></span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav aria-label="Desktop navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
          id="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
