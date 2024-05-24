'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Slider() {
	const images = [
		'/images/i1.jpg',
		'/images/i2.jpg',
		'/images/i3.jpg',
		'/images/i4.jpg',
		'/images/i5.jpg',
		'/images/i6.jpg',
		'/images/i7.jpg',
		'/images/i8.jpg',
	];

	const [imgNum, setImgNum] = useState(0);

	useEffect(() => {
		setInterval(() => {
			if (imgNum !== 7) {
				setImgNum(imgNum + 1);
			}
		}, 3000);
	}, [imgNum]);

	return (
		<div className="home-page__gallery">
			<div></div>
			<div className="gallery__photo">
				<Image
					className="home-page__photo"
					src={images[imgNum]}
					width={600}
					height={400}
					alt="Отель Солар"
				/>
			</div>

			<div className="gallery__rating">
				<Image
					className="photo__rating"
					src="/images/rating.png"
					width={320}
					height={340}
					alt="Рейтинг 4.4"
				/>
			</div>
		</div>
	);
}
