'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './sidebar';

export default function Header() {
	const [isClick, setIsClick] = useState(false);
	const toggleSidebar = () => {
		setIsClick(!isClick);
	};
	return (
		<header className="header">
			<Image src="/images/logo.png" alt="Hotel Solar" width={100} height={50} />
			<nav className="header__nav">
				<Link className="nav__link" href="#rooms">
					Номера
				</Link>
				<Link className="nav__link" href="#location">
					Расположение
				</Link>
				<Link className="nav__link" href="#comforts">
					Удобства
				</Link>
				<Link className="nav__link" href="#contacts">
					Контакты
				</Link>
			</nav>
			<div className="header__emptiness"></div>
			<div className="nav__menu-btn">
				<button className="menu-btn__button" onClick={toggleSidebar}>
					<svg width="35px" height="35px" viewBox="0 0 24 24">
						<path
							d="M4 6H20M4 12H20M4 18H20"
							stroke="#ffffff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</button>
			</div>
			{isClick && <Sidebar toggleSidebar={toggleSidebar} />}
		</header>
	);
}
