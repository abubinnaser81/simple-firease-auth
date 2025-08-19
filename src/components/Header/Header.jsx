import React from 'react';
const Header = () => {
  return (
    <nav>
        <ul>
            <Navlink to="/">Home</Navlink>
            {/* <Navlink to="/login">Login</Navlink>
            <Navlink to="/register">Register</Navlink> */}
        </ul>
    </nav>
  );
}

export default Header;