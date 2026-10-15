import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function App() {
    const [weather, setWeather] = useState(null);
    const [history, setHistory] = useState([]);
    const API_KEY = "YOUR_API_KEY";
    const city = "Hyderabad";

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => setWeather(res.data));

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => setHistory(res.data.list.slice(0, 8)));
    }, []);

    return (
        <div>
            <h1>Weather Information</h1>

            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Feels Like: {weather.main.feels_like} °C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}

            <h2>Weather Graph</h2>
            {history.length > 0 && (
                <Line data={{
                    labels: history.map(x => x.dt_txt),
                    datasets: [{
                        label: "Temperature (°C)",
                        data: history.map(x => x.main.temp)
                    }]
                }} />
            )}
        </div>
    );
}

export default App;
//npm install axios chart.js react-chartjs-2