import React from 'react';
import { Link } from "react-router-dom";
import { AppstoreOutlined, UserOutlined, NotificationOutlined, FileDoneOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

function Navigation() {
  const items = [
    {
      label: (<Link to="/">About</Link>),
      key: 'about',
      icon: <UserOutlined />
    },
    {
      label: (<Link to="/portfolio">Portfolio</Link>),
      key: 'portfolio',
      icon: <AppstoreOutlined />
    },
    {
      label: (<Link to="/contact">Contact</Link>),
      key: 'contact',
      icon: <NotificationOutlined />
    },
    {
      label: (<Link to="/resume">Resume</Link>),
      key: 'resume',
      icon: <FileDoneOutlined />
    },
  ];

  return <Menu mode="horizontal" items={items} />;


  //   <nav>
  //   <Menu>
  //     <li>
  //       <Link to="/portfolio">Portfolio</Link>
  //     </li>
  //     <li>
  //       <Link to="/about">About</Link>
  //     </li>
  //     <li>
  //       <Link to="/contact">Contact</Link>
  //     </li>
  //     <li>
  //       <Link to="/resume">Resume</Link>
  //     </li>
  //   </Menu>
  // </nav>

    





    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange('Home')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#resume"
    //       onClick={() => handlePageChange('Resume')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Blog
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
}

export default Navigation;