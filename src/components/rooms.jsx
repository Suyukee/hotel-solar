import Image from 'next/image';
import Link from 'next/link';

export default function Rooms() {
	const rooms = [
		{
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
		{
			name: 'Улучшенный с 1 кроватью',
			image: '/images/room-2.webp',
		},
		{
			name: 'Комфорт с 2 кроватями',
			image: '/images/room-3.webp',
		},
		{
			name: 'Комфорт с 1 кроватью',
			image: '/images/room-4.webp',
		},
		{
			name: '4-местный стандарт',
			image: '/images/room-5.webp',
		},
	];
	return (
		<div className="rooms">
			{rooms.map((room) => (
				<Link
					className="rooms__room-card"
					href="https://travel.yandex.ru/hotels/nizhny-novgorod/solar/"
				>
					<Image src={room.image} alt="" width={250} height={250} />
					<div className="room-card__room-class">
						<p>{room.name}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
