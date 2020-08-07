import React from "react";
import "./Home.css";
import Weather from "../components/Weather"
import axios from "axios";

class Home extends React.Component {
	state = {
		isLoading: true,
		weathers: []
	}
	getWeathers = async () => {
		let cityList = [
			{ 'name': '서울', 	'city_id': '1835847' },
			{ 'name': '부산', 	'city_id': '1838524' },
			{ 'name': '대구', 	'city_id': '1835329' },
			{ 'name': '인천', 	'city_id': '1843564' },
			{ 'name': '광주', 	'city_id': '1841811' },
			{ 'name': '대전', 	'city_id': '1835235' },
			{ 'name': '울산', 	'city_id': '1833747' },
			{ 'name': '세종', 	'city_id': '1842616' },
			{ 'name': '경기', 	'city_id': '1841610' },
			{ 'name': '강원', 	'city_id': '1843125' },
			{ 'name': '충청북도', 'city_id': '1845106' },
			{ 'name': '충청남도', 'city_id': '1845105' },
			{ 'name': '전라북도', 'city_id': '1845789' },
			{ 'name': '전라남도', 'city_id': '1845788' },
			{ 'name': '경상북도', 'city_id': '1841597' },
			{ 'name': '경상남도', 'city_id': '1902028' },
			{ 'name': '제주도', 	'city_id': '1846266' },
		];
		let url = "http://api.openweathermap.org/data/2.5/group?appid=386810cbad8c790d098133b2a9a614b1&units=metric&id="
		var param = Array.from(cityList.values(), v => v.city_id).join(",");

		const {
			data: { list }
		} = await axios.get(
			url + param
		);
		console.log(list);
		this.setState({ weathers: list, isLoading: false });	
	};
	componentDidMount() {
		this.getWeathers();
	}
	render() {
		const { isLoading, weathers } = this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
				) : (
					<div className="weathers">
						{weathers.map(weather => (
							<Weather 
								key={weather.id}
								id={weather.id}
								info={weather.main}
								weather={weather.weather}
								name={weather.name}
							/>
						))}
					</div>
				)}
			</section>	
		);
	}
}
export default Home;