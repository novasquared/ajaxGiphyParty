"use strict";
console.log("Let's get this party started!");
const API_KEY = "SFXbeFsxvBZWCxOsDd3jMLiU9EgNdy2O";
const GIPHY_BASE_URL = "http://api.giphy.com/v1/gifs/search";


function getSearchTerm() {
    let searchValue = $("#searchPhrase").val();
    return searchValue;
}

async function getGiphyData(evt) {
    evt.preventDefault();
    let firstParam = getSearchTerm(); // recommend separating
    let response = await axios.get(
        GIPHY_BASE_URL, { params: { q: firstParam, api_key: API_KEY } }
    );
    console.log("data", response);
    let dataLength = response.data.data.length;


    let randomNumber = getRandomNum(dataLength);
    let randomURL = response.data.data[randomNumber].images.original.url;
    addImage(randomURL);

    // let url = response.data.data[0].url
    // console.log(dataLength)
    // console.log("url", url);
    // addImage(url);
    // addImage("https://giphy.com/embed/ylyUQlf4VUVF9odXKU");

    return response.data; // may not need; not using anywhere else
}

function getRandomNum(length) {
    // take in the Axios reponse object and pull the array from it
    // generate a random URL and return that URL
    // pass in the returned URL to a saved variable to addImage

    // take in array length
    // generate a random number in that range

    return Math.floor((Math.random() * length) + 1);
}

function addImage(picURL) {
    // $("#pictures").html(res.data.???)
    $("#pictures").append(`<img src="${picURL}" alt="">`);
}

function removeImages() {
    //Empty pictures section
    $("#pictures").empty();
    return;
}

$("#party").on("submit", getGiphyData);
$('#removeImages').on("click", removeImages);

// break getGiphyData
// function handleSubmit(evt) 
    // call getFormData
    // call getImageFromGiphy
    // call addImage

// docstrings needed