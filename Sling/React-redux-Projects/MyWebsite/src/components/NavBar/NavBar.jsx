import React from 'react';

import './NavBar.scss'

function NavBar(props) {
    const {setTab} = props;

    return (
        <div className="header_main">
            <span className="website-name">Good Things</span>
            <span className="nav-options" onClick={() => setTab('Home')}>
                Home
            </span>
            <span className="nav-options" onClick={() => setTab('Resumè')}>
                Resumè
            </span>
            <span className="nav-options" onClick={() => setTab('Projects')}>
                Projects
            </span>
            <span className="nav-options" onClick={() => setTab('About-me')}>
                About
            </span>
        </div>
    )
}

export default NavBar