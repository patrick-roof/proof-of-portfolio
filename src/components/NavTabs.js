import React from 'react';
import '../styles/App.css';

const styles = {
  navbarStyle: {
    background: '#305252',
    justifyContent: 'end',
    height: '180px',
  },
  insidePill: {
    padding: '35px',
    // backgroundColor: '#E98A15',
  },
  outsidePill: {
    padding: '37px',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbarStyle} className="nav nav-pills">
      <li style={styles.outsidePill} className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link text-white'}
          style={styles.insidePill}
          navLinkActiveColor= '#E98A15'
        >
          Portfolio
        </a>
      </li>
      <li style={styles.outsidePill} className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-white'}
          style={styles.insidePill}
        >
          About
        </a>
      </li>
      <li style={styles.outsidePill} className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-white'}
          style={styles.insidePill}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;