// src/components/Header.ts

import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
);

export default Header;
