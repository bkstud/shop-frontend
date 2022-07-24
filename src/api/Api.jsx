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


async function postItems(endpoint, items) {
    return fetch(getApiUrl() + endpoint, {        
                    credentials: "include",
                    method: "POST",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    },
                })
}

export {
    getApiUrl,
    getCurrentUser,
    logoutUser,
    getItems,
    postItems,
}