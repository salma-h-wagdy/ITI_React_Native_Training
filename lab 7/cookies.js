function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createCookie(cookieName, cookieValue, expiryDate = null) {
    let expires = "";
    if (expiryDate) {
        let date = new Date();
        date.setTime(date.getTime() + (expiryDate * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; Max-Age=-99999999;';
}

function allCookieList() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    return ca.map(cookie => cookie.trim());
}

function hasCookie(cookieName) {
    return getCookie(cookieName) !== "";
}

