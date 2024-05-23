import Booking from '@/components/booking';
import Header from '@/components/header';
import Map from '@/components/map';
import Rooms from '@/components/rooms';
import Slider from '@/components/slider';
import Parking from '@/components/svgs/parking';
import Wifi from '@/components/svgs/wifi';

export default function Home() {
	return (
		<div className="main">
			<article className="main__home-page">
				<div className="home-page__circle circle-1"></div>
				<div className="home-page__circle circle-2"></div>
				<Header />
				{/* <Slider /> */}
				<Booking />
			</article>
			<article className="main__hotel-info">
				<Rooms />
			</article>
			<article className="main__hotel-info">
				<h1>Сведения об отеле</h1>
				<p>
					Семейный 3-звездочный Hotel Solar расположен рядом с Museum of History of Development of
					the Gorky Railroad. Отель располагает 11 кондиционируемыми номерами. Путь на авто до
					Radiophysics Museum составит 20 минут. Менее чем в 9 км есть All Saints Church.В
					окрестностях отеля находится Gorkovskiy Museume of Locomotives. Номера оснащены
					отоплением, зоной отдыха и звуконепроницаемыми окнами для вашего удобства. Во всех из них
					настелен пол с ковровым покрытием. Каждое утро в отеле предлагают континентальный
					завтрак.Неподалеку есть станция метро "Горьковская" и железнодорожная станции Нижний
					Новгород.
				</p>
				<h3>Важная информация</h3>
				<p>
					Регистрация заезда: с 14:00-23:59
					<br />
					Регистрация отъезда: до 12:00
				</p>
			</article>
			<article className="main__hotel-info">
				<h1>Расположение</h1>
				<p>2 Улица Запрудная, 603033, Нижний Новгород, Россия</p>
				<Map />
			</article>
			<article className="main__hotel-info">
				<h1>Удобства</h1>
				<ul>
					<li>
						<Wifi />
						Wi-Fi
					</li>
					<li>
						<Parking />
						Парковка
					</li>
					<li>Зона для отдыха</li>
					<li>Гладильные принадлежности</li>
					<li>Бесплатные туалетные принадлежности</li>
					<li>Телевизор с плоским экраном</li>
					<li>Пол с ковровым покрытием</li>
				</ul>
			</article>
			<article className="main__hotel-info">
				<h1>Контакты</h1>
			</article>
		</div>
	);
}
