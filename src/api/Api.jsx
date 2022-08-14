import Cookies from 'js-cookie';


const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS || "https://localhost:5000"

const getApiUrl = () => {
    return BACKEND_ADDRESS + "/api/v1"
}

const getToken = () => {
    return Cookies.get('token') ? Cookies.get('token') : ""
}

async function getCurrentUser() {
    return fetch(getApiUrl() + "/user/", {
                    method: "GET",
                    headers: {
                        Token: getToken()
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
                    method: "GET",
                    headers: {
                        Token: getToken()
                    }
                })
}

async function getTransactions() {
    return fetch(getApiUrl() + "/transactions/", {
                    method: "GET",
                    headers: {
                        Token: getToken()
                    }
                })
}

async function patchItems(endpoint, items) {
    return fetch(getApiUrl() + endpoint, {
                    method: "PATCH",
                    headers: {
                        Token: getToken()
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

async function createCheckoutSession(items) {
    return fetch(getApiUrl() + "/payment/create-checkout-session", {
                    method: "POST",
                    redirect: "manual",
                    headers: {
                        "Content-Type": "application/json",
                        Token: getToken()
                    },
                    body: JSON.stringify({"Items": items})
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
    getTransactions,
    createCheckoutSession
}