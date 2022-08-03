import Cookies from 'js-cookie';


const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS || "https://localhost:5000"

const getApiUrl = () => {
    return BACKEND_ADDRESS + "/api/v1"
}

async function getCurrentUser() {
    return fetch(getApiUrl() + "/user/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    }
                })
}

const logoutUser = () => {
    Cookies.remove('store', { path: '' })
}

async function getItems() {
    return fetch(getApiUrl() + "/items/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    }
                })
}

async function getBasket() {
    return fetch(getApiUrl() + "/basket/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    }
                })
}

async function patchItems(endpoint, items) {
    return fetch(getApiUrl() + endpoint, {        
                    credentials: "include",
                    method: "PATCH",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    },
                    body: JSON.stringify(items)
                })
}

async function postFeedback(feedback) {
    return fetch(getApiUrl() + "/feedback", {        
                    credentials: "include",
                    method: "POST",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    },
                    body: JSON.stringify({"Feedback": feedback})
                })
}

export {
    getApiUrl,
    getCurrentUser,
    logoutUser,
    getItems,
    patchItems,
    getBasket,
    postFeedback
}