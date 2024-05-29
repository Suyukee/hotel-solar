'use client';

import { useState } from 'react';

export default function Booking() {
	const today_date = new Date().toISOString().slice(0, 10);

	let max_date = new Date();
	max_date.setMonth(max_date.getMonth() + 6);

	console.log(today_date);
	console.log(max_date);

	const [startDate, setStartDate] = useState(today_date);
	const [endDate, setEndDate] = useState('');

	return (
		<form action="">
			<label for="start">Заезд</label>
			<input
				type="date"
				id="start"
				value={startDate}
				min={today_date}
				max={max_date}
				required
				onChange={() => setStartDate()}
			/>
			<label for="end">Выезд</label>
			<input
				type="date"
				id="end"
				value={endDate}
				min={today_date}
				max={max_date}
				required
				onChange={() => setEndDate()}
			/>
			<label for="room">Номер</label>
			<select id="room" required>
				<option value="1" selected>
					Cтандарт с 1 кроватью
				</option>
				<option value="2">Улучшенный с 1 кроватью</option>
				<option value="3">Комфорт с 2 кроватями</option>
				<option value="4">Комфорт с 1 кроватью</option>
				<option value="5">4-местный стандарт</option>
			</select>
		</form>
	);
}
