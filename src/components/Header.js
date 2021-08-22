import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

function Header() {

  return (
    <div className="header">
      <div className="header_left">
        <div className="header_option">
          <Link to="/" >
            <span className="header_optionLine header_optionLineExact">DennyDesigns</span>
          </Link>

        </div>
        <div className="header_option">
          <span className="header_optionLine">Products</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine">Collections</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine">Our Story</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine">Art</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine">Wholesale</span>
        </div>
      </div>
      <div className="header_right">
        <div className="header_rightSearchIcon">
          <SearchIcon className="header_rightIcon" />
        </div>
        <div className="header_rightLogin">
          <Link to="/login">
            <PersonIcon className="header_rightIcon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
