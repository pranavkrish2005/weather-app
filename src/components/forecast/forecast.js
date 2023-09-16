import { Accordion, 
    AccordionItem, 
    AccordionItemHeading, 
    AccordionItemPanel, 
    AccordionItemButton, } from "react-accessible-accordion";
import "./forecast.css";

const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const Forecast = ({ data }) => {

    return (
        <>
            <h1 className="title">3 day forecast</h1>
            <Accordion allowZeroExpanded>
                {data.forecast.forecastday.slice(0, 3).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <div id="day-div">
                                    <img src={item.day.condition.icon} alt="weather" className="status_picture"></img>
                                    <label className="Day">{arr[new Date(item.date).getDay()]}</label>
                                    </div>
                                    <div className="Temp">
                                    <label className="avg_temp">{item.day.avgtemp_c}°C</label>
                                    <label className="bold min_max_temp">
                                        <span className="max">{item.day.maxtemp_c}</span>°C / <span className="min">{item.day.mintemp_c}</span>°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details">
                                <div className="daily-detail-items">
                                    <label className="detail-name">Wind Speed</label>
                                    <label className="detail-value">{item.day.maxwind_kph} Km/h</label>
                                </div>

                                <div className="daily-detail-items">
                                    <label className="detail-name">Chance of Rain</label>
                                    <label className="detail-value">{item.day.daily_chance_of_rain}%</label>
                                </div>

                                <div className="daily-detail-items">
                                    <label className="detail-name">Average Humidity</label>
                                    <label className="detail-value">{item.day.avghumidity}%</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default Forecast;