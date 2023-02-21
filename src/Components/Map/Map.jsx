import React from 'react'
import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {
  return (
    <div id="map_div">

    <MapContainer center={[45.8130211, 15.9751946]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[46.324340, 16.2879266]}>
            <Popup>
                Kratka 4 Sračinec 
            </Popup>
        </Marker>
    </MapContainer>

</div>
  )
}

export default Map