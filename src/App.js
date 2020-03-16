import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "da955d7aca70dbebda02f6fdc18955b9";

class App extends React.Component {
  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidity: undefined,
    description: undefined,
    sea_level:undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`

    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        sea_level:data.main.sea_level,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        humidity: undefined,
        description: undefined,
        sea_level:undefined,
        error: "Please type in the fields!"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container">
                  <h4>Location</h4>
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                    sea_level = {this.state.sea_level}
                    error={this.state.error}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
