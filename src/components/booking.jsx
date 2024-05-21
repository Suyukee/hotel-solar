import Link from 'next/link';

export default function Booking() {
	return (
		<div className="home-page__booking">
			<div className="booking__card">
				<p>Забронировать через Яндекс Путешествия</p>
				<Link
					className="booking__btn"
					href="https://travel.yandex.ru/hotels/nizhny-novgorod/solar/"
				>
					Перейти
				</Link>
			</div>
		</div>
	);
}
