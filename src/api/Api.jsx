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
                        Token: Cookies.get('token')
                    }
                })
}

const logoutUser = () => {
    Cookies.remove('token')
    Cookies.remove('basket')
}

async function getItems() {
    return fetch(getApiUrl() + "/items/", {        
                    method: "GET",
                })
}

async function getBasket() {
    return fetch(getApiUrl() + "/basket/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Token: Cookies.get('token')
                    }
                })
}

async function getTransactions() {
    return fetch(getApiUrl() + "/transactions/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Token: Cookies.get('token')
                    }
                })
}

async function patchItems(endpoint, items) {
    return fetch(getApiUrl() + endpoint, {        
                    credentials: "include",
                    method: "PATCH",
                    headers: {
                        Token: Cookies.get('token')
                    },
                    body: JSON.stringify(items)
                })
}

async function postFeedback(feedback) {
    return fetch(getApiUrl() + "/feedback/", {        
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"Contents": feedback})
                })
}

export {
    getApiUrl,
    getCurrentUser,
    logoutUser,
    getItems,
    patchItems,
    getBasket,
    postFeedback,
    getTransactions
}