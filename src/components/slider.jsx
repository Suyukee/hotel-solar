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
	return (
		<div className="home-page__gallery">
			{/* {images.map((i, index) => (
				<Image
					className={`home-page__photo photo-${i}`}
					src={i}
					width={600}
					height={400}
					key={index}
					alt="Отель Солар"
				/>
			))} */}
			<h2>*Здесь что-то будет*</h2>
		</div>
	);
}
