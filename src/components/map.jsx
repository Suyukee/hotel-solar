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
				src="https://yandex.ru/map-widget/v1/?ll=43.841298%2C56.291703&mode=whatshere&whatshere%5Bpoint%5D=43.841298%2C56.291703&whatshere%5Bzoom%5D=17&z=17"
				width="100%"
				height="500"
				frameBorder="0"
				allowFullScreen={true}
				loading="lazy"
			></iframe>
		</div>
	);
}
