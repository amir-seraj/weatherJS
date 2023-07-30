import React, { useEffect, useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { MdFavorite } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";

function Favorite({ name, setName, handleClick }) {
  const [favList, setFavList] = useState(() => {
    let currentList;
    try {
      currentList = JSON.parse(localStorage.getItem("favlist") || []);
    } catch (error) {
      currentList = [];
    }
    return currentList;
  });
  const handleFavAdd = (name) => {
    if (!favList.includes(name) && name !== "") {
      setFavList([...favList, name]);
    } else {
      console.log("exists");
    }
  };
  const removeFav = (name) => {
    if (favList.includes(name)) {
      setFavList(favList.filter((item) => item !== name));
    }
  };
  useEffect(() => {
    if (favList.length >= 0) {
      localStorage.setItem("favlist", JSON.stringify([...favList]));
    }
  }, [favList]);

  useEffect(() => {
    handleClick();
  }, [name]);
  return (
    <div className="fav-container">
      <div className="fav-header">
        <h3>Favorites</h3>{" "}
        <button onClick={() => handleFavAdd(name)}>
          ADD <MdFavorite size="1.3rem" />
        </button>{" "}
      </div>
      <div className="fav">
        {favList.map((item, index) => (
          <div className="fav-item" key={index}>
            <li
              onClick={() => {
                setName(item);
              }}
            >
              <TiLocationOutline size="1.2rem" />
              {JSON.stringify(item)} |
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
