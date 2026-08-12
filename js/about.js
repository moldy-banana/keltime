
// this script is under the MIT license (https://maxpixels.moe/resources/license.txt)

let domain = "keltime.nekoweb.org"; // <<<--- Insert your domain here!

/* (async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at);
    const today = new Date();
    const timeDifference = today - created;
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (document.getElementById("created"))
      document.getElementById("created").innerHTML =
        `${daysDifference} days ago`;
    if (document.getElementById("updated"))
      document.getElementById("updated").innerHTML =
        `${updated}`;
  } catch (error) {
    console.error(error);
    // If you wish to insert some fallback here, you may do so!
  }
})(); */

const USERNAME = "moldy_banana"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/moldy_banana/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = true;

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']

 /*  THE V2 ABOUT ME VERSION
  document.getElementById("listening").innerHTML = 
    `
    <div class="text-spacing music-flex">
     <img class="music-image" src="/images/music-headphones.jpg">
     <div class="music-lastfm" id="trackInfo">
      <!-- <img src=" ${json.track.image[1]['#text']}" /> -->
         <h4 id="trackName"><em>${json.track.name}</em></h4>
         <p class="music-artist" id="artistName">${json.track.artist['#text']}</p>
     </div>
    </div> 
    ` */
    // new about me version 
    document.getElementById("listening").innerHTML = 
    `
     <div class="container-lastfm">
     <img class="music-image" src="/images/music-headphones.jpg">
     <div class="music-lastfm" id="trackInfo">
      <!-- <img src=" ${json.track.image[1]['#text']}" /> -->
         <p id="trackName"><strong><em>${json.track.name}</em></strong></p>
         <p class="music-artist" id="artistName">${json.track.artist['#text']}</p>
     </div>
     </div>

    `
};

getTrack();