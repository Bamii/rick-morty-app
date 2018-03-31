import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_EPISODES = 'GET_EPISODES';
export const SEARCH = 'SEARCH';

const ROOT_URL = 'https://rickandmortyapi.com/api/'

export function getCharacters(page) {
    let characters;
    if(page) {
        characters = axios.get(`${ROOT_URL}character?page=${page}`);
    } else {
        characters = axios.get(`${ROOT_URL}character`);
    }
    return {
        type: GET_CHARACTERS,
        payload: characters
    }
}

export function getLocations(page) {
    let locations;
    if(page) {
        locations = axios.get(`${ROOT_URL}location?page=${page}`);
    } else {
        locations = axios.get(`${ROOT_URL}location`);
    }
    return {
        type: GET_LOCATIONS,
        payload: locations,
    }
}

export function getEpisodes(page) {
    let episodes;
    if(page) {
        episodes = axios.get(`${ROOT_URL}episode?page=${page}`);
    } else {
        episodes = axios.get(`${ROOT_URL}episode`);
    }
    return {
        type: GET_EPISODES,
        payload: episodes,
    }
}

export function search(category, term, next) {
    let searchUrl;
    if(next) {
        searchUrl = axios.get(next);
    } else {
        searchUrl = axios.get(`${ROOT_URL}${category}?name=${term}`);
    }
    return {
        type: SEARCH,
        payload: searchUrl,
    }
}