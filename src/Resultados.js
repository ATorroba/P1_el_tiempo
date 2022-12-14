export default function Resultados(props) {
    return (<div id="resultados">
      <h3>
        Timezone:  
        <span id="timezone"> {props.items.timezone}</span>
      </h3>
      <h4>El tiempo en los próximos días será:</h4>
         <ul id="lista">
          {props.items.daily.map((item) => (
            <li>
              <p><b>{new Date(item.dt * 1000).toLocaleDateString()}</b></p>
              <p><img className="tiempoimg" alt="" src={"http://openweathermap.org/img/wn/"+item.weather[0].icon+".png"} /></p>
              <p>Temp: {(item.temp.day -273.15).toFixed(2)}ºC </p>
              <p>Humedad: {item.humidity}%</p>
              <p>Viento: {item.wind_speed}m/s</p>
            </li>
          )).slice(0,props.numitems)}
        </ul>
      </div>);
}