import React from "react";
import axios from "axios";

export default function Weather() {
    let apiKey =
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
    return <h2>Hello from Weather</h2>
}