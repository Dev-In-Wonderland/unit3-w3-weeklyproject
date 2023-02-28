import { Col, Row } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  let rockArtists = [
    "The dire Straits",
    "Elvis Presley",
    "Kiss",
    "Deep Purple",
    "The Doors",
    "The Rolling Stones",
    "The Pink Floys",
    "The white Stripes",
  ];

  let popArtists = [
    "Prince",
    "Michael Jackson",
    "Justin Bieber",
    "Jason Derulo",
    "Adriano Celentano",
    "Spandau Ballet",
  ];

  let hipHopArtists = ["Will. i. am", "dmx", "neffex", "busta rhymes", "Kendrick Lamar"];

  let headers = new Headers({
    
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const search = async () => {
    let div = document.querySelector("#searchResults .row");
    div.innerHTML = "";
    let searchQuery = document.querySelector("#searchField").value; 

    if (searchQuery.length > 2) {
      
      document.querySelector("#searchResults").style.display = "block";

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers,
          }
        ); 

        if (response.ok) {
          let result = await response.json(); 
          let songs = result.data; 

          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x]);
          }
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      
      document.querySelector("#searchResults").style.display = "none";
    }
  };

  function albumCard(songInfo) {
    
    return `
          <div class="col text-center" id=${songInfo.id}>
            <a href="/album/id=${songInfo.album.id}">
              <img class="img-fluid" src=${
                songInfo.album.cover_medium
              } alt="1" />
            </a>
            <p>
              <a href="/album/id=${songInfo.album.id}">
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...`
                }"<br>
              </a>
              <a href="/artist/id=${songInfo.artist.id}">
                Artist: ${songInfo.artist.name}
              </a>
            </p>
          </div>`;
  }

  const handleArtist = async (artistName, domQuerySelector) => {
    
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      ); 
      if (response.ok) {
        let result = await response.json(); 
        let songInfo = result.data;
        let div = document.querySelector(domQuerySelector);
        div.innerHTML += albumCard(songInfo[0]); 
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  window.onload = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    document.querySelector("#searchField").value = ""; 

    while (rockRandomArtists.length < 4) {
      
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; 
      if (!rockRandomArtists.includes(artist)) {
        
        rockRandomArtists.push(artist); 
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };

  return (
    <>
      <Col className="col-12 col-md-8 offset-md-3 mainPage">
        <Row className="row ">
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#t">TRENDING</a>
            <a href="#t">GENRES</a>
            <a href="#t">NEWS</a>
            <a href="#t">DISCOVER</a>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10">
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10 p-0">
            <div id="rock">
              <h2>Rock Music</h2>
              <Row
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10  p-0">
            <div id="pop">
              <h2>Pop Music</h2>
              <Row
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row className="row m-0">
          <Col className="col-10  p-0">
            <div id="hiphop">
              <h2>#Hiphop</h2>
              <Row
                className="row m-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Home;
