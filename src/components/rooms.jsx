import Image from 'next/image';
import Link from 'next/link';

export default function Rooms() {
	const rooms = [
		{
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
		{
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
		{
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
		{
			name: 'Cтандарт с 1 кроватью',
			image: '/images/room-1.webp',
		},
	];
	return (
		<Link className="rooms" href="https://travel.yandex.ru/hotels/nizhny-novgorod/solar/">
			{rooms.map((room) => (
				<div className="rooms__room-card">
					<Image src={room.image} alt="" width={300} height={300} />
					<p>{room.name}</p>
				</div>
			))}
		</Link>
	);
}
