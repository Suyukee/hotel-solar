import Image from 'next/image';
import Link from 'next/link';

export default function Rooms() {
	const rooms = [
		{
			id: 1,
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
		{
			id: 2,
			name: 'Улучшенный с 1 кроватью',
			image: '/images/room-2.webp',
		},
		{
			id: 3,
			name: 'Комфорт с 2 кроватями',
			image: '/images/room-3.webp',
		},
		{
			id: 4,
			name: 'Комфорт с 1 кроватью',
			image: '/images/room-4.webp',
		},
		{
			id: 5,
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
					key={room.id}
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
