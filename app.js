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
    let firstParam = getSearchTerm();
    let response = await axios.get(
        GIPHY_BASE_URL, {params: {q : firstParam, api_key : API_KEY}}
        );
    console.log("data", response);
    addImage();
    return response.data
}

// function getRandomNum(length) {

// }

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

