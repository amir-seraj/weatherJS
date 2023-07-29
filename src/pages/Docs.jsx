import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiTrashCan } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

function Docs() {
  return (
    <>
      <div id="main-doc">
        <section className="main-section">
          <h1 className="section-title">Documentation</h1>
          <br />
          <h2>How to search?</h2>
          <ol>
            <li>
              In the Homepage there is a search bar that you can write city's
              name in it.
            </li>
            <li>
              Then by using <FaSearchLocation /> button you can get the weather
              details.
            </li>
          </ol>
          {/* <img src={doc1} /> */}
          <br />
          <br />
          <h2>How To mark a city as a favorite?</h2>
          <ul>
            <li>
              There is a <MdFavorite style={{ color: "white" }} /> button at top
              of the Favorites list,
              <br /> that by clicking on it, you can mark a a city as a
              favorite.
            </li>
          </ul>
          {/* <img src={doc2} /> */}
          <br />
          <br />
          <h2>How to remove a city from favorites list?</h2>
          <ul>
            <li>
              There is a <GiTrashCan /> button in front of every city's name
              which is in the list, that by clicking on it, you can delete the
              city...
            </li>
          </ul>{" "}
          {/* <img src={doc3} /> */}
          <br />
          <br />
          <h2>How to switch between ℃ and ℉ ?</h2>
          <ul>
            <li>
              There is a{" "}
              <button
                style={{
                  border: "none",
                  outline: 0,
                  padding: "12px 15px",
                  fontSize: "18px",
                  backgroundColor: "rgba(222, 237, 243, 0.438)",
                  color: "white",
                  borderRadius: "30px",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                <span>&#8457;</span>
              </button>{" "}
              button in front of search bar.
              <br /> that by clicking on it, you can switch between ℃ and ℉.
            </li>
          </ul>
          {/* <img src={doc4} /> */}
          <br /> <br />
        </section>
      </div>
    </>
  );
}

export default Docs;
