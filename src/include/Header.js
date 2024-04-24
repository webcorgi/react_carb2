import React from 'react';
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="widthWrap">
                <h1>
                    <Link href="/react_carb2">
                        <img src={logo} alt="carbell" />
                        <span>파트너사</span>
                    </Link>
                </h1>
                <aside><Link href="/react_carb2">로그아웃</Link></aside>
            </div>
        </header>
    );
}

export default Header;
