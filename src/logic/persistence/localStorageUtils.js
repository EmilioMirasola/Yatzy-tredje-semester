export function getInLocalStorage(key) {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
}

export function setInLocalStorage(key, value) {
    const stringified = JSON.stringify(value)
    localStorage.setItem(key, stringified)
}