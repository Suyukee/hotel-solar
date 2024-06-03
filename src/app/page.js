import Header from '@/components/header';
import Map from '@/components/map';
import Rooms from '@/components/rooms';
import Slider from '@/components/slider';
import CheckMark from '@/components/svgs/check-mark';
import Conditioner from '@/components/svgs/conditioner';
import CreditCard from '@/components/svgs/credit-card';
import Parking from '@/components/svgs/parking';
import Wifi from '@/components/svgs/wifi';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="main">
			<article className="main__home-page" id="home">
				<Header />
				<div className="home-page__circle circle-1"></div>
				<div className="home-page__circle circle-2"></div>
				<Slider />
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
			</article>
			<article className="main__hotel-info room-cards" id="rooms">
				<Rooms />
			</article>
			<article className="main__hotel-info">
				<h1>Сведения об отеле</h1>
				<p>
					Гостиница Солар расположена в городе Нижний Новгород в 11 км от центра.
					<br />
					<br />
					Здесь созданы все условия для комфортного проживания — есть кондиционер, холодильник,
					телевизор, фен, утюг, чай/кофе в номерах, чайник, отопление. Вы можете выбрать на Яндекс
					Путешествиях любой из 11 доступных сейчас номеров. Уборка — каждый день.
					<br />
					<br />
					У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл
					или позвонить родным по видео.
					<br />
					<br />
					Учитывайте время заселения в гостиницу. Заезд здесь начинается с 14:00, выехать нужно до
					12:00. Даже если вы прибудете поздно ночью, вас встретят на круглосуточной стойке
					регистрации и помогут с размещением.
					<br />
					<br />
					Если вы на машине, можете оставить её на парковке.
					<br />
					<br />К вашим услугам: обслуживание номеров, консьерж-сервис, камера хранения, ускоренная
					регистрация заезда/отъезда.
				</p>
			</article>
			<article className="main__hotel-info" id="location">
				<h1>Расположение</h1>
				<p>2 Улица Запрудная, 603033, Нижний Новгород, Россия</p>
				<Map />
			</article>
			<article className="main__hotel-info" id="comforts">
				<h1>Удобства</h1>
				<ul className="hotel-info__icon-comforts">
					<li>
						<Wifi />
						Wi-Fi
					</li>
					<li>
						<Parking />
						Парковка
					</li>
					<li>
						<Conditioner />
						Кондиционер в номере
					</li>
					<li>
						<CreditCard />
						Оплата картой
					</li>
				</ul>
				<ul className="hotel-info__comforts">
					<h4>
						<CheckMark />
						Интернет
					</h4>
					<li>Интернет в гостинице: бесплатный</li>
					<li>Доступ в интернет: в номерах</li>
					<li>Доступ в интернет: на всей территории отеля</li>
				</ul>
				<ul className="hotel-info__comforts">
					<h4>
						<CheckMark />
						Услуги и удобства
					</h4>
					<li>Частота уборки: ежедневно</li>
					<li>Ускоренная регистрация заезда/отъезда</li>
					<li>Трансфер: до/от аэропорта</li>
					<li>Консьерж-сервис</li>
					<li>Возможно проживание с животными</li>
					<li>Круглосуточная стойка регистрации</li>
					<li>Камера хранения</li>
				</ul>
				<ul className="hotel-info__comforts">
					<h4>
						<CheckMark />
						Удобства в номерах
					</h4>
					<li>Телевизор в номере</li>
					<li>Чай/кофе в номерах</li>
					<li>Номера со звукоизоляцией</li>
					<li>Уборка</li>
					<li>Тапочки</li>
					<li>Утюг</li>
					<li>Номера для некурящих</li>
					<li>Холодильник</li>
					<li>Фен</li>
				</ul>
			</article>
			<article className="main__hotel-info" id="contacts">
				<h1>Контакты</h1>
				<a href="tel:79200590080">+7 (920) 059-00-80</a>
				<a href="tel:78312170080">+7 (831) 217-00-80</a>
				<a className="hotel-info__wa-link" href="https://wa.me/79200590080">
					WhatsApp
				</a>
				<a className="hotel-info__viber-link" href="viber://chat?number=%2B79200590080">
					Viber
				</a>
			</article>
		</div>
	);
}
