import "./current-weather.css"

const currentWeather = ({data}) => {
    return (
        <div id="current-weather">
            <div id="main-info">
                <h2 className="bold" id="city">{data.location.name}</h2>
                <img src={data.current.condition.icon} className="weather-icon" alt="weather"></img>
            </div>
            <h1 className="bold" id="temperature">{data.current.temp_c}°C</h1>
            <div id="other-information">
                <div className="info-row">
                    <span className="info-label">Feels like</span>
                    <span className="bold info-value">{data.current.feelslike_c}°C</span>
                </div>

                <div className="info-row">
                    <span className="info-label">Wind</span>
                    <span className=" bold info-value">{data.current.gust_kph} km/h</span>
                </div>

                <div className="info-row">
                    <span className="info-label">Humidity</span>
                    <span className="bold info-value">{data.current.humidity}%</span>
                </div>

                <div className="info-row">
                    <span className="info-label">UV Index</span>
                    <span className="bold info-value">{data.current.uv}</span>
                </div>
            </div>
        </div>
    );
}

export default currentWeather;