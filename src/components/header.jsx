'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<header className="header">
			<Link className="header__logo" href="/">
				<Image src="/images/logo.png" alt="Hotel Solar" width={100} height={50} />
			</Link>
			<nav className="header__nav">
				<Link className="nav__link" href="/">
					Главная
				</Link>
				<Link className="nav__link" href="/">
					Номера
				</Link>
				<Link className="nav__link" href="/">
					Расположение
				</Link>
				<Link className="nav__link" href="/">
					Удобства
				</Link>
				<Link className="nav__link" href="/">
					Контакты
				</Link>
			</nav>
			<div className="header__emptiness"></div>
			<div className="nav__menu-btn">
				<button className="menu-btn__button">
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
		</header>
	);
}
