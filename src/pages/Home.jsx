import axios from "axios";
import React, { useState } from "react";
import { RiDrizzleFill, RiMistLine } from "react-icons/ri";
import { IoMdCloudy, IoMdPartlySunny, IoMdRainy } from "react-icons/io";
import Favorite from "../components/Favorite";
import WInfo from "../components/WInfo";
import Search from "../components/Search";

function Home() {
  const [data, setData] = useState({
    celsius: 0,
    name: "Weather",
    humidity: 0,
    speed: 0,
    image: <IoMdCloudy size="2rem" />,
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [degFlag, setDegFlag] = useState(false);
  const [FDeg, setFDeg] = useState(0);

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=47cb1d23a5fbe26d8642f773f8b66582&units=metric`;
      // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b951387ef2d5899926ebfcbf5ae81bef&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main === "Clouds") {
            imagePath = <IoMdCloudy size="2rem" />;
          } else if (res.data.weather[0].main === "Clear") {
            imagePath = <IoMdPartlySunny size="2rem" />;
          } else if (res.data.weather[0].main === "Rain") {
            imagePath = <IoMdRainy size="2rem" />;
          } else if (res.data.weather[0].main === "Drizzle") {
            imagePath = <RiDrizzleFill size="2rem" />;
          } else if (res.data.weather[0].main === "Mist") {
            imagePath = <RiMistLine size="2rem" />;
          } else {
            imagePath = <IoMdCloudy size="2rem" />;
          }
          setData({
            ...data,
            celsius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError("");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid City Name");
          } else {
            setError("");
          }
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="weather">
        <Search
          data={data}
          setFDeg={setFDeg}
          setName={setName}
          handleClick={handleClick}
          degFlag={degFlag}
          setDegFlag={setDegFlag}
        />
        <div className="error">
          <p>{error}</p>
        </div>
        <WInfo data={data} degFlag={degFlag} FDeg={FDeg} />
      </div>
      <Favorite name={name} setName={setName} handleClick={handleClick} />
    </div>
  );
}
export default Home;
