import React, { useState } from 'react'
import "./index.css";
import "leaflet/dist/leaflet.css"
import {MapContainer, Marker, TileLayer} from "react-leaflet"
const Map = ({geoCode}) => {
    let geo  = [parseFloat(code[0]),parseFloat(code[1])];
    console.log(geo);
    return (
        <MapContainer center={[33.8735578,35.863749]} zoom={13}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {
            
            geoCode.map(code => (
                
                
                
                <Marker position={geo}>

                </Marker>
            ))
            
           }
        </MapContainer>
    )
}
export default Map;
