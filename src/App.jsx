import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON   } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import direcciones  from './assets/direccion.json'
import geojsonData from './assets/plaza.json'

import './App.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {  
  
  const LatitudInicial  = '-29.905779496284936'
  const LongitudInicial = '-71.25000311748254'

  const  CentrarMapa = () => {
    // useMap : SOLO se declara dentro de un hijo de MapContainer. 💡
    const map = useMap()
  
    const centrarMapa = () => {
      map.setView([LatitudInicial,LongitudInicial], 16)
    }

    return (
      <button onClick={centrarMapa}  
              style={{
                      position: 'absolute',
                      backgroundColor:'#000',
                      fontWeight:800,
                      color:'white',                                            
                      top: 10,
                      right: 10,
                      zIndex: 1000,
                      padding: '8px 12px',                                            
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      cursor: 'pointer'
                  }}>    
        Centrar mapa
      </button>
    )

  }

  return (
    
    <>
        <nav style={{display:'flex',justifyContent:'space-around'}}>
          <h1> Mapa 📌 </h1>          
        </nav>

        <MapContainer center={[ LatitudInicial , LongitudInicial ]} zoom={16}>

          <CentrarMapa />

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {
            direcciones?.map((dire,index)=>(
              <Marker  key={ index } position={[ dire.coordenadas.lat, dire.coordenadas.lng ]}>    
                 <Popup>
                    <strong>Nombre: { dire.nombre }</strong>                      
                      <br/>
                    Direccion : { dire.direccion }
                 </Popup>
              </Marker>
            ))
          }

        <GeoJSON data={geojsonData}
                 style={() => ({
                            color: 'red',
                            weight: 2,
                            fillColor: '#3388ff',
                            fillOpacity: 0.5
                 })} 
        />

        </MapContainer>

    </>
    
  )

}

export default App