import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="frame__title">Sticky Sections</h1>
      <nav className="frame__nav">
        <a className="frame__back " href="https://sudeep-acharjee.me">
          Sudeep Acharjee
        </a> <br></br>
        <a className="frame__prev" href="#">
          Github
        </a><br></br>
        <a className="frame__sub" href="https://www.instagram.com/_al.che.mist">
         Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;