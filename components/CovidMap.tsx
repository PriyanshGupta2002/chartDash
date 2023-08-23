"use client"
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIcon2xUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { CountryData } from '@/utils/types';
import {useQuery} from "@tanstack/react-query"


const CovidMap: React.FC = () => {
  const {data,isLoading} = useQuery({
    queryKey:["countryData"],
    queryFn:()=>
      fetch('https://disease.sh/v3/covid-19/countries').then(
        (res) => res.json(),
      ),
  })
  if(isLoading) return "Loading..."
  

  return (
    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} style={{ width: '100%', height: '100vh', margin: '20px 0px',zIndex:"0" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((country:CountryData) => {
        const icon = new L.Icon({
          iconUrl: markerIconUrl.src,
          iconRetinaUrl: markerIcon2xUrl.src,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: markerShadowUrl.src,
          shadowSize: [41, 41],
        });

        return (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={icon}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default CovidMap;
