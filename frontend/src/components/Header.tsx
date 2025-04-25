import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Store Monitoring Application</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;