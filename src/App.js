import './App.css';
import Header from './Header';
import Resultados from "./Resultados";
import Error from './Error';
import { useState } from "react";
import { mock1 } from './constants/mock';
import CONFIG from "./config/config";
const USE_SERVER = CONFIG.use_server;

function App() {

  const [lat,setLat] = useState(CONFIG.default_lat);
  const [lon,setLon] = useState(CONFIG.default_lon);
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = async () => {    
    if(USE_SERVER) {
      try {
        let queryparams = "?lat="+ lat + "&lon=" + lon + "&appid=" + CONFIG.api_key;
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();         
        //console.log(response);
        if(response.status === 200){
          console.log("200 OK");
          setResultado(data);
        }else{
          //console.log("Esto es un error");
          setResultado();
          setError(data);
        }
      } catch (error) {
        //console.log(error);
        //console.log("HOLAAAA");
       setResultado({ error: {description: error.message} });
       setError(error);
      }
    } else {
      setResultado(mock1);
    }
}

  return (
    <div className="App" id='resultados'>
      <Header />
      <h2 id='titulo'>El tiempo</h2>
      <p>
        <label><b>Latitud: </b></label>
        <input type="number" id='latitud' value={lat} placeholder="Latitud" onChange={e=>setLat(e.target.value)}/>
        <label> <b>Longitud:</b> </label>
        <input type="number" id='longitud' value={lon} placeholder="Longitud" onChange={e=>setLon(e.target.value)}/>
      </p>
      <button id='buscar' onClick={()=>callServer()} >Buscar</button>
      {resultado && <Resultados items={resultado} numitems={CONFIG.num_items}/>	}
      {error && <Error cosa={error}/>}
    </div>
  );
}

export default App;
