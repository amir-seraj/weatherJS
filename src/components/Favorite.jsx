import React, { useEffect, useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { MdFavorite } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";

function Favorite({ name, setName, handleClick }) {
  const [fav, setFav] = useState([]);
  let arrayFavs = Object.keys(localStorage);

  const addFav = (name) => {
    if (!fav.includes(name)) {
      setFav([...fav, name]);
      localStorage.setItem(JSON.stringify(name), true);
    } else {
      console.log(arrayFavs);
      console.log("exists");
    }
  };
  const removeFav = (name) => {
    setFav(fav.filter((item) => item !== name));
    localStorage.removeItem(name);
  };
  // const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  // console.log(getArray);

  // useEffect(() => {
  //   if (getArray !== 0) {
  //     setFav([...getArray]);
  //   }
  // }, []);

  return (
    <div className="fav-container">
      <div className="fav-header">
        <h3>Favorites</h3>{" "}
        <button onClick={() => addFav(name)}>
          ADD <MdFavorite size="1.3rem" />
        </button>{" "}
      </div>
      <div className="fav">
        {arrayFavs?.map((item, index) => (
          <div className="fav-item" key={index}>
            <li
              onClick={() => {
                setName(item);
                handleClick();
              }}
            >
              <TiLocationOutline size="1.2rem" />
              {JSON.parse(item)} |
            </li>
            <button
              onClick={() => {
                removeFav(item);
              }}
            >
              <GiTrashCan size="1.2rem" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
