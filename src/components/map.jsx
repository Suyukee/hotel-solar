export default function Map() {
	return (
		<div className="map">
			{/* <a
				className="map__link"
				href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps"
			>
				Нижний Новгород
			</a> */}
			{/* <a
				className="map__link-2"
				href="https://yandex.ru/maps/47/nizhny-novgorod/house/zaprudnaya_ulitsa_2/YEoYfgNhS0wPQFtsfX54cHtjZw==/?ll=43.841298%2C56.291703&utm_medium=mapframe&utm_source=maps&z=17"
			>
				Запрудная улица, 2 на карте Нижнего Новгорода — Яндекс Карты
			</a> */}
			<iframe
				className="map__frame"
				src="https://yandex.ru/map-widget/v1/?ll=43.840453%2C56.291616&mode=poi&poi%5Bpoint%5D=43.840745%2C56.292023&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D239566170913&z=17.8"
				width="100%"
				height="500"
				frameBorder="0"
				allowFullScreen={true}
				loading="lazy"
			></iframe>
		</div>
	);
}
