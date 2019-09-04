import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';


import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from'reactstrap';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [dropDown, setDropdown] = useState(false)
    const toggleDropdown = e =>{
      e.preventDefault();
      setDropdown(!dropDown)
    }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Dropdown isOpen={dropDown} onClick={toggleDropdown}>
        <DropdownToggle caret>
          Graph Picker
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><Link>All</Link></DropdownItem>
          <DropdownItem><Link>Bitcoin</Link></DropdownItem>
          <DropdownItem><Link>Ethereum</Link></DropdownItem>
          <DropdownItem><Link>XRP</Link></DropdownItem>
          <DropdownItem><Link>Bitcoin Cash</Link></DropdownItem>
          <DropdownItem><Link>Litecoin</Link></DropdownItem>
          <DropdownItem><Link>Tether</Link></DropdownItem>
          <DropdownItem><Link>EOS</Link></DropdownItem>
          <DropdownItem><Link>Binance Coin</Link></DropdownItem>
          <DropdownItem><Link>Bitcoin SV</Link></DropdownItem>
          <DropdownItem><Link>Cardano</Link></DropdownItem>
          <Link></Link>
        </DropdownMenu>
      </Dropdown>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
